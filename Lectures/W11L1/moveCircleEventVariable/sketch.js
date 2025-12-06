let circleX = 25;
let circleY = 375;
let circleW = 50;
let speed = 5;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    if (keyIsPressed) {
        if (keyCode === RIGHT_ARROW) {
            circleX += speed;
        }
    }
    circle(circleX, circleY, circleW);
}
