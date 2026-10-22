const CIRCLE_W = 20;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    fill(0, 0, 255);
    let x = 10;
    while (x < mouseX) {
        circle(x, height / 2, CIRCLE_W);
        x += CIRCLE_W;
    }
}