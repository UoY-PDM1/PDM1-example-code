function setup() {
    createCanvas(300, 300);
    rectMode(CENTER);
}

function draw() {
    background(0, 175, 175);
    stroke(255, 255, 255, 150);
    strokeWeight(20);
    fill(255, 255, 0, 150);
    rect(150, 150, 300, 100);
    rect(150, 150, 100, 300);
}