/**
 * Using arrays would be better!
 */
let circle1X = 80;
let circle2X = 200;
let circle3X = 320;
const CIRCLE_SIZE = 100;
const CIRCLE_Y = 200;

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    fill(getFillColour(circle1X));
    circle(circle1X, CIRCLE_Y, CIRCLE_SIZE);

    fill(getFillColour(circle2X));
    circle(circle2X, CIRCLE_Y, CIRCLE_SIZE);

    fill(getFillColour(circle3X));
    circle(circle3X, CIRCLE_Y, CIRCLE_SIZE);

}

/**
 * Gets the fill colour of the circle with the given x coordinate.
 * @param {number} x The circle's X coordinate
 * @returns {color} A colour object
 */
function getFillColour(x) {
    if (isMouseOverCircle(x)) {
        return color(0, 255, 255);
    }
    else {
        return color(255, 0, 255);
    }
}

/**
 * Checks if the mouse is over the circle at the given x coordinate.
 * 
 * This function is the simplest solution for the specific task but is 
 * not particularly flexible due to the use of the CIRCLE_Y and CIRCLE_SIZE
 * global variables.
 * @param {number} x The circle's x coordinate
 * @returns {boolean}
 */
function isMouseOverCircle(x) {
    return mouseX >= x - CIRCLE_SIZE / 2 && mouseX <= x + CIRCLE_SIZE / 2 && mouseY >= CIRCLE_Y - CIRCLE_SIZE / 2 && mouseY <= CIRCLE_Y + CIRCLE_SIZE / 2;
}