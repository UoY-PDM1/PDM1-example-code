let xVals = [];
let yVals = [];
const fallSpeed = 2;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0, 0, 100);
    for (let i = 0; i < xVals.length; i++) {
        star(xVals[i], yVals[i]);
    }
    updateStars();
}

function mouseClicked() {
    xVals.push(mouseX);
    yVals.push(mouseY);
}

/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */
function star(x, y) {
    // fill(255, 234, 0);
    fill(fadeColour(y)); // extension activity
    noStroke();
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}

/**
 * Calculates the fill colour of a star based on its y coordinate
 * @param {number} y 
 * @returns {Color} A p5.js colour
 */
function fadeColour(y) {
    const r = 255 * ((height - y) / height);
    const g = 234 * ((height - y) / height);
    const b = (y / height) * 100;
    return color(r, g, b);
}

/**
 * Updates the y coordinate of each star to create a falling 
 * effect.
 */
function updateStars() {
    for (let i = 0; i < yVals.length; i++) {
        yVals[i] += fallSpeed;
    }
}