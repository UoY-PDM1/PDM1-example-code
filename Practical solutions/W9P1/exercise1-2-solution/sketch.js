const TORCH_SIZE = 100;
let points = 0;
let torch, jewel, skull, darkness, spotlight, jewelCounter, skullCounter;
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
    torch = new Torch(darkness, spotlight);
    jewelCounter = new Jewel(width - 25, 25, 30, 30);
    skullCounter = new Skull(width - 25, 65, 30, 30);
}

function draw() {
    background(50, 0, 0);
    jewel.draw();
    skull.draw();
    torch.setPosition(mouseX, mouseY);
    torch.draw();
    checkIfItemFound();
    showPoints();
    showFoundJewels();
    showFoundSkulls();
}


/**
 * Checks if either the jewel or skull has been found. If an item is found,
 * the points are updated and new items generated where needed.
 */
function checkIfItemFound() {
    if (torch.isInLight(jewel.getCentreX(), jewel.getCentreY())) {
        points += jewel.getPoints();
        foundJewels.push(new Jewel(jewel.getCentreX(), jewel.getCentreY(), jewel.getWidth(), jewel.getHeight()));
        foundJewels[foundJewels.length - 1].fade();
        jewel = newRandomJewel();
        skull = newRandomSkull();
    }
    if (torch.isInLight(skull.getCentreX(), skull.getCentreY())) {
        points += skull.getPoints();
        foundSkulls.push(new Skull(skull.getCentreX(), skull.getCentreY(), skull.getWidth(), skull.getHeight()));
        foundSkulls[foundSkulls.length - 1].fade();
        skull = newRandomSkull();
    }
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
    jewelCounter.draw();
    skullCounter.draw();
}

/**
 * Draws the jewels found so far
 */
function showFoundJewels() {
    for (let j of foundJewels) {
        j.draw();
    }
}

/**
 * Draws the skulls found so far
 */
function showFoundSkulls() {
    for (let s of foundSkulls) {
        s.draw();
    }
}

function newRandomDimensions() {
    let newW = random(50, TORCH_SIZE);
    let newH = random(50, TORCH_SIZE);
    let newX = random(newW / 2, width - newW / 2);
    let newY = random(newH / 2, height - newH / 2);
    return {
        x: newX,
        y: newY,
        width: newW,
        height: newH
    }
}

/**
 * Creates a new Skull of a random size and at a random location
 * @returns {Skull} A new Skull object
 */
function newRandomSkull() {
    let dimensions = newRandomDimensions();
    return new Skull(dimensions.x, dimensions.y, dimensions.width, dimensions.height);
}

/**
 * Creates a new Jewel of a random size and at a random location.
 * @returns {Jewel} A new Jewel object
 */
function newRandomJewel() {
    let dimensions = newRandomDimensions();
    return new Jewel(dimensions.x, dimensions.y, dimensions.width, dimensions.height);
}

function testTorch() {
    let t = new Torch(darkness, spotlight);
    t.setPosition(50, 50);
    let test1 = t.isInLight(0, 0);
    console.log("isInCircle(0, 0) returns false", test1);
    let test2 = t.isInLight(50, 50);
    console.log("isInCircle(50, 0) returns true", test2);
}

class Torch {
    #backgroundImg;
    #torchImg;
    #x;
    #y;

    constructor(bgImg, torchImg) {
        this.#x = bgImg.width / 2;
        this.#y = bgImg.height / 2;
        this.#backgroundImg = bgImg;
        this.#torchImg = torchImg;
    }

    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
    }

    draw() {
        this.#createLight();
        image(this.#backgroundImg, 0, 0, width, height);
        image(this.#torchImg, this.#x - this.#torchImg.width / 2, this.#y - this.#torchImg.height / 2);
    }

    #createLight() {
        // for every pixel in darkness, if it is outside the ring of the spotlight, set alpha to 255, otherwise 0
        this.#backgroundImg.loadPixels();
        for (let x = 0; x < this.#backgroundImg.width; x++) {
            for (let y = 0; y < this.#backgroundImg.height; y++) {
                let pxIndex = this.#convertCoordToIndex(x, y, this.#backgroundImg.width);
                if (this.isInLight(x, y)) {
                    this.#backgroundImg.pixels[pxIndex + 3] = 0;
                } else {
                    this.#backgroundImg.pixels[pxIndex + 3] = 255;
                }
            }
        }
        this.#backgroundImg.updatePixels();
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
    #convertCoordToIndex(x, y, areaWidth) {
        return areaWidth * y * 4 + x * 4;
    }

    /**
     * Tests if a pixel is inside the torch light.
     * @param {number} pixelX The x coordinate of the pixel
     * @param {number} pixelY The y coordinate of the pixel
     * @returns {boolean} True if the pixel is inside the circle, false if not.
     */
    isInLight(pixelX, pixelY) {
        return pow(pixelX - this.#x, 2) + pow(pixelY - this.#y, 2) <= pow(this.#torchImg.width / 2, 2)
    }
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
     * @param {number} x The x coordinate of the centre of the jewel
     * @param {number} y The y coordinate of the centre of the jewel
     * @param {number} width The width of the jewel
     * @param {number} height The height of the jewel
     */
    constructor(x, y, width, height) {
        this.#x = x - width / 2;
        this.#y = y - width / 2;
        this.#width = width;
        this.#height = height;
    }

    /**
     * Draws the jewel (as long as it has not faded out)
     */
    draw() {
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
     * Gets the x coordinate of the centre of the jewel
     * @returns {number} The x coordinate
     */
    getCentreX() {
        return this.#x + this.#width / 2;
    }

    /**
     * Gets the y coordinate of the centre of the jewel
     * @returns {number} The y coordinate
     */
    getCentreY() {
        return this.#y + this.#height / 2;
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
    draw() {
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
     * Gets the points associated with the skull, which is dependent 
     * on its size
     * @returns {number} The penalty value of the skull
     */
    getPoints() {
        return -round(this.#PENALTY_PER_PIXEL * this.#width * this.#height);
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