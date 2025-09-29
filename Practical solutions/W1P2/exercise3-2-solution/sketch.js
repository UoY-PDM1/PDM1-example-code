function setup() {
    createCanvas(300, 300);
    rectMode(CENTER);
}

function draw() {
    background(255);
    fill(0);
    square(50, 50, 100);
    square(150, 150, 100);
    square(250, 250, 100);
    fill(150);
    circle(50, 50, 100);
    circle(150, 150, 100);
    circle(250, 250, 100);
}