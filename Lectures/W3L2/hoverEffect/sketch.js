let square1X, square1Y, square1W, square2X, square2Y, square2W, square3X, square3Y, square3W;

function setup() {
    createCanvas(600, 600);
    square1W = random(50, 200);
    square1X = random(width - square1W);
    square1Y = random(height - square1W);

    square2W = random(50, 200);
    square2X = random(width - square2W);
    square2Y = random(height - square2W);

    square3W = random(50, 200);
    square3X = random(width - square3W);
    square3Y = random(height - square3W);

    strokeWeight(10);
}

function draw() {
    background(0);
    drawSquare(square1X, square1Y, square1W);
    drawSquare(square2X, square2Y, square2W);
    drawSquare(square3X, square3Y, square3W);
}

function drawSquare(x, y, squareWidth) {
    let highlight = getHighlightColour(x, y, squareWidth);
    stroke(highlight);
    square(x, y, squareWidth);
}

function getHighlightColour(x, y, squareWidth) {
    if (mouseIsOver(x, y, squareWidth)) {
        return color(255, 0, 255);
    } else {
        return color(255);
    }
}

function mouseIsOver(x, y, squareWidth) {
    if (mouseX >= x && mouseX <= x + squareWidth && mouseY >= y && mouseY <= y + squareWidth) {
        return true;
    }
    else {
        return false;
    }
    /* The whole conditional could be shortened to
     * return mouseX >= x && mouseX <= x + squareWidth && mouseY >= y && mouseY <= y + squareWidth;
     */
}