const NUM_SQUARES = 10;
const SQUARE_SIZE = 50;
let xVals = [];
let yVals = [];
let colours = [];
let gap;

function setup() {
    createCanvas(600, 600);
    noStroke();
    // calculates the size of the gap relative to the size of the canvas, the number of squares, and their size
    gap = (width - (NUM_SQUARES * SQUARE_SIZE)) / (NUM_SQUARES + 1);
    createSquares();
}

function draw() {
  background(0);

    // Draw squares from the array
    for (let i = 0; i < NUM_SQUARES; i++) {
        fill(colours[i]);
        square(xVals[i], yVals[i], SQUARE_SIZE);
    }
}

function keyPressed() {
    if (key === ' ') {
        for (let i = 0; i < NUM_SQUARES; i++) {
            colours[i] = randomColour();
        }
    } else if (key === 'r') {
        for (let i = 0; i < NUM_SQUARES; i++) {
            yVals[i] = 0;
        }
    }
}

function mouseClicked() {
    for (let i = 0; i < NUM_SQUARES; i++) {
        if (isMouseOverSquare(i)) {
            if (yVals[i] === 0) {
                yVals[i] = height - SQUARE_SIZE;
            } else {
                yVals[i] = 0;
            }
        }
    }
}

/**
 * Checks if the mouse is over the square at the given index.
 * @param {number} i The index of the square in the arrays
 * @returns {boolean} True if the mouse is over the square, false if not.
 */
function isMouseOverSquare(i) {
    let squareX = xVals[i];
    let squareY = yVals[i];

    return mouseX >= squareX && mouseX <= squareX + SQUARE_SIZE &&
        mouseY >= squareY && mouseY <= squareY + SQUARE_SIZE;
}

/**
 * Populates the arrays storing information about the squares.
 */
function createSquares() {
    for (let i = 0; i < NUM_SQUARES; i++) {
        xVals.push(i * SQUARE_SIZE + gap * (i + 1));
        yVals.push(0);
        colours.push(randomColour());
    }
}

/**
 * Generates a random RGB colour
 * @returns {color} A p5.js colour object
 */
function randomColour() {
    return color(random(255), random(255), random(255));
}
