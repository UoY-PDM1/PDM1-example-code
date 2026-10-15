let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    fill(0, 0, 150);
    rect(100, 100, 400, 200);
    if (isOutOfBounds(x, 100, 500) || isOutOfBounds(y, 100, 300)) {
        fill(0, 0, 150);
    } else {
        fill(255);
    }
    circle(x, y, 100);
    if (isOutOfBounds(x, 50, width - 50)) {
        speedX *= -1;
    }
    if (isOutOfBounds(y, 50, height - 50)) {
        speedY *= -1;
    }
    x += speedX;
    y += speedY;
}

function isOutOfBounds(coordinate, minVal, maxVal) {
    return coordinate < minVal || coordinate > maxVal;
}