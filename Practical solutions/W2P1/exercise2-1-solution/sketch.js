let x = 0;
let y = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    circle(x, y, 40);
    x = x + 1;
    y = y + 1;
}