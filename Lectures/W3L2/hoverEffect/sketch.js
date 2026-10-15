
function setup() {
    createCanvas(600, 600);
    strokeWeight(10);
}

function draw() {
    background(0);
    drawSquare(30, 40, 100);
    drawSquare(420, 225, 150);
    drawSquare(230, 300, 50);
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