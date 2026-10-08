let x = 0;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
    circle(x, 150, 40);
    x = x + 1;
}
