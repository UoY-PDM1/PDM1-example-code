let circleX = 25;
let circleY = 375;
let circleW = 50;
let speed = 5;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    circle(circleX, circleY, circleW);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        circleX += speed;
    }
}