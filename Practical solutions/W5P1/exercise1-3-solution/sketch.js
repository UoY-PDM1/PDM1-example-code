let xVals = [];
let yVals = [];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    saveMouseCoordinates();
    drawTail(); 
}

/**
 * Draws the mouse tail - the 5 most recent mouse coordinates.
 */
function drawTail() {
    for (let i = 0; i < xVals.length; i++) {
        fill(0, 0, 255);
        circle(xVals[i], yVals[i], calculateBrushSize(i, xVals.length));
    }
}

/**
 * Calculates the size of the brush
 * @param {number} index The index of the point
 * @param {number} numPoints The total number of points tracked
 * @returns {number} The diameter of the brush in pixels
 */
function calculateBrushSize(index, numPoints) {
    return 20 - (numPoints - (index + 1)) * 2
}

/**
 * Adds the current mouse location to the tracking arrays and 
 * removes the oldest location if more than 5 locations have been 
 * saved.
 */
function saveMouseCoordinates() {
    xVals.push(mouseX);
    yVals.push(mouseY);
    if (xVals.length > 5) {
        xVals.shift();
        yVals.shift();
    }
}