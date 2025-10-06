let x = 0;
let moveAmount;

function setup() {
    createCanvas(600, 600);
    moveAmount = random(1, 11);
}

function draw() {
    background(0);
    circle(x, height / 2, 100);
    if (x < 0 || x > width) {
        moveAmount *= -1;
    }
    x += moveAmount;
}