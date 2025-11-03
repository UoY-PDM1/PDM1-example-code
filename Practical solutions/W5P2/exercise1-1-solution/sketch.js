const NUM_RECTANGLES = 100;
let rectangles = [];
let bgColour;

function setup() {
    createCanvas(600, 600);
    bgColour = getRandomColour();
    generateRectangles();
}

function draw() {
    background(bgColour);
    for (let i in rectangles) {
        if (i % 2 === 0) {
            fill(0);
        } else {
            fill(255);
        }
        rect(rectangles[i].x, rectangles[i].y, rectangles[i].w, rectangles[i].h);
    }
}

function keyPressed() {
    if (key === " ") {
        bgColour = getRandomColour();
        generateRectangles();
    }
}

/**
 * Gets a random colour (including a random alpha value)
 * Not required for this exercise...just didn't feel like picking a colour!
 * @returns {color} A random p5.js color object
 */
function getRandomColour() {
    return color(random(255), random(255), random(255), random(255));
}

/**
 * Populates the rectangles array with objects describing rectangles. 
 * The properties of each rectangle object are generated randomly
 */
function generateRectangles() {
    for (let i = 0; i < NUM_RECTANGLES; i++) {
        const newRect = {
            x: random(width),
            y: random(height),
            w: random(5, 10),
            h: random(5, 10)
        }
        rectangles[i] = newRect;
    }
}
