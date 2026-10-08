const squareWidth = 50;
const halfWidth = squareWidth / 2;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
}

function draw() {
    background(0, 150, 150)
    // Version 1
    let squareX = mouseX;
    let squareY = mouseY;
    if (squareX < halfWidth) {
        squareX = halfWidth;
    } else if (squareX > width - halfWidth) {
        squareX = width - halfWidth;
    }
    if (squareY < halfWidth) {
        squareY = halfWidth;
    } else if (squareY > height - halfWidth) {
        squareY = height - halfWidth;
    }
    // End of version 1
    // Version 2
    // let squareX = constrain(mouseX, halfWidth, width - halfWidth);
    // let squareY = constrain(mouseY, halfWidth, height - halfWidth);
    // End of version 2
    square(squareX, squareY, squareWidth);
}