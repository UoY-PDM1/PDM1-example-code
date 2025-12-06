let currentX;
let currentY;
let speedX = 3;
let speedY = 3;
let oldXs = [];
let oldYs = [];

function setup() {
    createCanvas(600, 400);
    currentX = random(width);
    currentY = random(height);
    rectMode(CENTER);
}

function draw() {
    background(0);

    fill(255, 0, 255);
    circle(currentX, currentY, 50);

    currentX += speedX;
    currentY += speedY;

    if (currentX <= 25 || currentX >= width - 25) {
        speedX *= -1;
    }
    if (currentY <= 25 || currentY >= height - 25) {
        speedY *= -1;
    }

    fill(255, 255, 255, 100);
    for (let i = 0; i < oldXs.length; i++) {
        square(oldXs[i], oldYs[i], 50);
    }
}

function mouseClicked() {
    retireOldShape(currentX, currentY);
    currentX = mouseX;
    currentY = mouseY;
}

function retireOldShape(x, y) {
    oldXs.push(x);
    oldYs.push(y);
}