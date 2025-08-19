let rectX = [];
let rectY = [];
let rectW = [];
let rectH = [];
let colours = [];

function setup() {
    createCanvas(600, 400);
    rectMode(CENTER);
}

function draw() {
    background(0);
    for (let i = 0; i < rectX.length; i++) {
        fill(colours[i]);
        rect(rectX[i], rectY[i], rectW[i], rectH[i]);
    }
}

function mouseClicked() {
    createNewRectangle();
    updateColours();
}

/**
 * Generates a random p5.js color.
 * @returns {color}
 */
function generateRandomColour() {
    return color(random(255), random(255), random(255));
}

/**
 * Creates a new random rectangle at the mouse position.
 */
function createNewRectangle() {
    rectX.push(mouseX);
    rectY.push(mouseY);
    rectW.push(random(5, 50));
    rectH.push(random(5, 50));
    colours.push(generateRandomColour());
}

/**
 * Generates new random colours for existing rectangles
 */
function updateColours() {
    for (let i = 0; i < colours.length - 1; i++) {
        colours[i] = generateRandomColour();
    }
}