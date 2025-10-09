let circleX = 20;
let circleY = 20;
let circleW = 40;
let g, b;

function setup() {
    frameRate(30);
    createCanvas(600, 400);
    noStroke();
    background(0);
    g = random(10, 255);
    b = random(255);
}

function draw() {
    fill(0, g, b);
    circle(circleX, circleY, circleW);
    if (circleX === width - circleW / 2) { // Error: typo in circleW
        circleY = (circleY + circleW) % height; 
    }
    circleX = (circleX + circleW) % width; // Bug: forgot brackets and % operator takes precedence over +
    b = (b + 1) % 255;
}