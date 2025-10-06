let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    circle(x, y, 100);
    if (x < 50 || x > width - 50) {
        speedX *= -1;
    }
    if (y < 50 || y > height - 50) {
        speedY *= -1;
    }
    x += speedX;
    y += speedY;
}