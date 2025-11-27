const TORCH_SIZE = 100;
let points = 0;
let jewel, skull, darkness, spotlight, jewelCounter, skullCounter;
let foundJewels = [];
let foundSkulls = [];

function preload() {
    darkness = loadImage("assets/darkness.png");
    spotlight = loadImage("assets/spotlight.png");
}

function setup() {
    createCanvas(600, 400);
    jewel = newRandomJewel();
    skull = newRandomSkull();
    jewelCounter = new Jewel(width - 40, 10, 30, 30);
    skullCounter = new Skull(width - 25, 65, 30, 30);
}

function draw() {
    background(50, 0, 0);
    jewel.showJewel();
    skull.showSkull();
    shineSpot(mouseX, mouseY);
    let spotX = convertCenterToCorner(mouseX, TORCH_SIZE);
    let spotY = convertCenterToCorner(mouseY, TORCH_SIZE);
    image(darkness, 0, 0, width, height);
    image(spotlight, spotX, spotY, TORCH_SIZE, TORCH_SIZE);
    checkIfItemFound();
    showPoints();
    showFoundJewels();
    showFoundSkulls();
}

/**
 * Converts the x or y coordinate of a shape drawn in CORNER mode into the CENTER
 * mode equivalent.
 * @param {number} coordinate The coordinate (x or y) of a shape drawn in CORNER mode
 * @param {number} dimension The dimension (width or height) of the shape
 * @returns {number} The CENTER mode equivalent of the coordinate
 * @example
 * Consider the following rectangle drawn in CORNER mode
 * rect(0, 100, 200, 50)
 * To find the center of the rectangle:
 * let centreX = convertCornerToCenter(0, 200); 
 * let centreY = convertCornerToCenter(100, 50);
 * centreX would be 100
 * centreY would be 125
 */
function convertCornerToCenter(coordinate, dimension) {
    return coordinate + dimension / 2;
}

/**
 * Converts the x or y coordinate of a shape drawn in CENTER mode into the CORNER
 * mode equivalent.
 * @param {number} coordinate The coordinate (x or y) of a shape drawn in CENTER mode
 * @param {number} dimension The dimension (width or height) of the shape
 * @returns {number} The CORNER mode equivalent of the coordinate
 * @example
 * Consider the following rectangle drawn in CENTER mode
 * rect(100, 125, 200, 50)
 * To find the center of the rectangle:
 * let cornerX = convertCenterToCorner(100, 200);
 * let cornerY = convertCenterToCorner(125, 50);
 * cornerX would be 0
 * cornerY would be 100
 */
function convertCenterToCorner(coordinate, dimension) {
    return coordinate - dimension / 2;
}

/**
 * A function for testing the correctness of the three coordinate conversion functions:
 * convertCornerToCenter(), convertCenterToCorner(), and convertCoordinateToIndex(). 
 * This function is not intended to be used by the sketch itself.
 * 
 * To run the tests, call testCoordinateConversion() from your browser console, 
 * or call it in setup() to have the tests run automatically
 */
function testCoordinateConversion() {
    // Tests for convert cornerToCenter()
    let test1 = convertCornerToCenter(0, 200);
    console.log("convertCornerToCenter(0, 200) returns 100:", test1);
    let test2 = convertCornerToCenter(100, 50);
    console.log("convertCornerToCenter(100, 50) returns 125:", test2);
    
    // Tests for convertCenterToCorner()
    let test3 = convertCenterToCorner(100, 200);
    console.log("convertCenterToCorner(100, 200) returns 0:", test3);
    let test4 = convertCenterToCorner(125, 50);
    console.log("convertCenterToCorner(125, 50) returns 100:", test4);

    // Tests for convertCoordinateToIndeX()
    let test5 = convertCoordToIndex(0, 0, 100); // The simplest case
    console.log("convertCoordinateToIndex(0, 0, 100) should return 0", test5);
    let test6 = convertCoordToIndex(1, 0, 100); // Check that the index increases by 4 in a simple case
    console.log("convertCoordinateToIndex(1, 0, 100) returns 4", test6);
    let test7 = convertCoordToIndex(0, 1, 100); // Check that the rows are properly handled
    console.log("convertCoordinateToIndex(0, 1, 100) should return 400", test7);
    let test8 = convertCoordToIndex(99, 3, 100); // Check a more challenging case
    console.log("convertCoordinateToIndex(99, 3, 100) should return 1596", test8);
}

/**
 * Converts a pixel's x, y location to the index of its red value
 * in a pixel array
 * @param {number} x The x coordinate of the pixel
 * @param {number} y The y coordinate of the pixel
 * @param {number} areaWidth The width of the area that the pixel array 
 * represents. For example, an image width.
 * @returns {number} The index of the pixel's red value in a pixel array
 * @example
 * convertCoordToIndex(0, 0, 100) --> 0
 * convertCoordToIndex(1, 0, 100) --> 4
 * convertCoordToIndex(0, 1, 100) --> 400
 */
function convertCoordToIndex(x, y, areaWidth) {
    return areaWidth * y * 4 + x * 4;
}


/**
 * Checks if either the jewel or skull has been found. If an item is found,
 * the points are updated and new items generated where needed.
 */
function checkIfItemFound() {
    let jewelCentreX = convertCornerToCenter(jewel.getLeft(), jewel.getWidth());
    let jewelCentreY = convertCornerToCenter(jewel.getTop(), jewel.getHeight());
    if (isInCircle(jewelCentreX, jewelCentreY, mouseX, mouseY, TORCH_SIZE / 2)) {
        points += jewel.getPoints();
        foundJewels.push(new Jewel(jewel.getLeft(), jewel.getTop(), jewel.getWidth(), jewel.getHeight()));
        foundJewels[foundJewels.length - 1].fade();
        jewel = newRandomJewel();
        skull = newRandomSkull();
    }
    if (isInCircle(skull.getCentreX(), skull.getCentreY(), mouseX, mouseY, TORCH_SIZE / 2)) {
        points -= skull.getPenalty();
        foundSkulls.push(new Skull(skull.getCentreX(), skull.getCentreY(), skull.getWidth(), skull.getHeight()));
        foundSkulls[foundSkulls.length - 1].fade();
        skull = newRandomSkull();
    }
}

/**
 * Tests if a pixel is inside a circle.
 * @param {number} pixelX The x coordinate of the pixel
 * @param {number} pixelY The y coordinate of the pixel
 * @param {number} circleCentreX The x coordinate of the centre of the circle
 * @param {number} circleCentreY The y coordinate of the centre of the circle
 * @param {number} radius The radius of the circle
 * @returns {boolean} True if the pixel is inside the circle, false if not.
 */
function isInCircle(pixelX, pixelY, circleCentreX, circleCentreY, radius) {
    return pow(pixelX - circleCentreX, 2) + pow(pixelY - circleCentreY, 2) <= pow(radius, 2)
}

/**
 * This function identifies the pixels under the spotlight (the circle in the spotlight image).
 * The alpha value of each pixel in the darkness image is set to 255 (opaque) if the is is not 
 * under the spotlight, and 0 (transparent) if it is.
 * @param {number} spotCenterX The centre x coordinate of the spotlight
 * @param {number} spotCenterY The centre y coordinate of the spotlight
 */
function shineSpot(spotCenterX, spotCenterY) {
    // for every pixel in darkness, if it is outside the ring of the spotlight, set alpha to 255, otherwise 0
    darkness.loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pxIndex = convertCoordToIndex(x, y, width);
            if (isInCircle(x, y, spotCenterX, spotCenterY, TORCH_SIZE / 2)) {
                darkness.pixels[pxIndex + 3] = 0;
            } else {
                darkness.pixels[pxIndex + 3] = 255;
            }
        }
    }
    darkness.updatePixels();
}

/**
 * Draw all information relating to points: the points themselves, and 
 * the counts of jewels and skulls found so far.
 */
function showPoints() {
    fill(0, 255, 0);
    textAlign(LEFT, TOP);
    textSize(36);
    text(points, 10, 10, 200, 50);
    textAlign(RIGHT, TOP);
    textSize(30);
    text(foundJewels.length, 200, 10, width - 245, 50);
    text(foundSkulls.length, 200, 50, width - 245, 50);
    jewelCounter.showJewel();
    skullCounter.showSkull();
}

/**
 * Draws the jewels found so far
 */
function showFoundJewels() {
    for (let j of foundJewels) {
        j.showJewel();
    }
}

/**
 * Draws the skulls found so far
 */
function showFoundSkulls() {
    for (let s of foundSkulls) {
        s.showSkull();
    }
}

/**
 * Creates a new Skull of a random size and at a random location
 * @returns {Skull} A new Skull object
 */
function newRandomSkull() {
    let newW = random(50, TORCH_SIZE);
    let newH = random(50, TORCH_SIZE);
    let newX = random(newW / 2, width - newW / 2);
    let newY = random(newH / 2, height - newH / 2);
    return new Skull(newX, newY, newW, newH);
}

/**
 * Creates a new Jewel of a random size and at a random location.
 * @returns {Jewel} A new Jewel object
 */
function newRandomJewel() {
    let newW = random(50, TORCH_SIZE);
    let newH = random(50, TORCH_SIZE);
    let newX = random(width - newW);
    let newY = random(height - newH);
    return new Jewel(newX, newY, newW, newH);
}

/**
 * A class representing a jewel item
 */
class Jewel {
    #POINTS_PER_PIXEL = 1;
    #x;
    #y;
    #width;
    #height;
    #alpha = 255;
    #isFading = false;

    /**
     * Creates a new Jewel
     * @param {number} x The x coordinate of the top left corner of the jewel
     * @param {number} y The y coordinate of the top left corner of the jewel
     * @param {number} width The width of the jewel
     * @param {number} height The height of the jewel
     */
    constructor(x, y, width, height) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
    }

    /**
     * Draws the jewel (as long as it has not faded out)
     */
    showJewel() {
        if (this.#alpha > 0) {
            let strokeAdj; // used to adjust coordinates to keep total dimensions in the given range
            if (this.#width >= 50) {
                strokeAdj = 3;
            } else {
                strokeAdj = 1;
            }
            strokeWeight(strokeAdj);
            stroke(235, 171, 52, this.#alpha);
            fill(235, 229, 52, this.#alpha);
            // The y coordinate that divides the top from the base
            let y = this.#y + this.#height * 0.3;
            // base
            triangle(this.#x + strokeAdj, y, this.#x + this.#width / 3, y, this.#x + this.#width / 2, this.#y + this.#height - strokeAdj);
            triangle(this.#x + this.#width / 3, y, this.#x + 2 * (this.#width / 3), y, this.#x + this.#width / 2, this.#y + this.#height - strokeAdj);
            triangle(this.#x + 2 * (this.#width / 3), y, this.#x + this.#width - strokeAdj, y, this.#x + this.#width / 2, this.#y + this.#height - strokeAdj);
            // top
            triangle(this.#x + strokeAdj, y, this.#x + this.#width / 2, y, this.#x + this.#width / 4, this.#y + strokeAdj);
            triangle(this.#x + this.#width / 4, this.#y + strokeAdj, this.#x + 3 * (this.#width / 4), this.#y + strokeAdj, this.#x + this.#width / 2, y);
            triangle(this.#x + 3 * (this.#width / 4), this.#y + strokeAdj, this.#x + this.#width - strokeAdj, y, this.#x + this.#width / 2, y);
        }
        if (this.#isFading) {
            this.#processFade();
        }
    }

    /**
     * Gets the x coordinate of the top left corner of the jewel
     * @returns {number} The x coordinate
     */
    getLeft() {
        return this.#x;
    }

    /**
     * Gets the y coordinate of the top left corner of the jewel
     * @returns {number} The y coordinate
     */
    getTop() {
        return this.#y;
    }

    /**
     * Gets the width of the jewel
     * @returns {number} The width
     */
    getWidth() {
        return this.#width;
    }

    /**
     * Gets the height of the jewel
     * @returns {number} The height
     */
    getHeight() {
        return this.#height;
    }

    /**
     * Gets the point value of this jewel, which is dependent on its size
     * @returns {number} The point value
     */
    getPoints() {
        return round(this.#POINTS_PER_PIXEL * this.#width * this.#height);
    }

    /**
     * Sets the fade status of the jewel to true
     */
    fade() {
        this.#isFading = true;
    }

    /**
     * A private helper method for fading the jewel
     */
    #processFade() {
        if (this.#alpha > 0) {
            this.#alpha--;
        }
    }
}

/**
 * A class representing a skull item
 */
class Skull {
    #PENALTY_PER_PIXEL = 0.5;
    #x;
    #y;
    #width;
    #height;
    #alpha = 255;
    #isFading = false;

    /**
     * Creates a new Skull
     * @param {number} x The x coordinate of the centre of the skull
     * @param {number} y The y coordinate of the centre of the skull
     * @param {number} width The width of the skull
     * @param {number} height The height of the skull
     */
    constructor(x, y, width, height) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
    }

    /**
     * Draws the skull (unless it has been faded out)
     */
    showSkull() {
        if (this.#alpha > 0) {
            strokeWeight(2);
            stroke(0, this.#alpha);
            fill(255, this.#alpha);
            let jawWidth = this.#width * 0.6;
            let jawLeft = this.#x - jawWidth / 2;
            let toothWidth = this.#width * 0.1;
            // Calculation worked out using triangle geometry... remember SOHCAHTOA
            let toothY = sin(QUARTER_PI) * (min(this.#width, this.#height) / 2);
            rect(jawLeft, this.#y + toothY, jawWidth, this.#height / 2 - toothY)
            for (let x = jawLeft + toothWidth; x < jawLeft + jawWidth; x += toothWidth) {
                line(x, this.#y + toothY, x, this.#y + this.#height / 2);
            }
            arc(this.#x, this.#y, this.#width, this.#height, PI - QUARTER_PI, QUARTER_PI, CHORD);
            fill(0, this.#alpha);
            ellipse(this.#x - this.#width / 4, this.#y, this.#width / 4, this.#height / 3);
            ellipse(this.#x + this.#width / 4, this.#y, this.#width / 4, this.#height / 3);
        }
        if (this.#isFading) {
            this.#processFade();
        }
    }

    /**
     * Gets the x coordinate of the centre of the skull
     * @returns {number} The x coordinate
     */
    getCentreX() {
        return this.#x;
    }

    /**
     * Gets the y coordinate of the centre of the skull
     * @returns {number} The y coordinate
     */
    getCentreY() {
        return this.#y;
    }

    /**
     * Gets the width of the skull
     * @returns {number} The width
     */
    getWidth() {
        return this.#width;
    }

    /**
     * Gets the height of the skull
     * @returns {number} The height
     */
    getHeight() {
        return this.#height;
    }

    /**
     * Gets the penalty (number of points to deduct) associated with the skull, which is dependent 
     * on its size
     * @returns {number} The penalty value of the skull
     */
    getPenalty() {
        return round(this.#PENALTY_PER_PIXEL * this.#width * this.#height);
    }

    /**
     * Sets the fade status of the skull to true
     */
    fade() {
        this.#isFading = true;
    }

    /**
     * Private helper method to handle fading the skull
     */
    #processFade() {
        if (this.#alpha > 0) {
            this.#alpha--;
        }
    }
}