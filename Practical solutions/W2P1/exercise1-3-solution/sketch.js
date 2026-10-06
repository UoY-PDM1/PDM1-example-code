function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
}

function draw() {
    background(255);
    fill(150, 0, 150);
    square(mouseX, mouseY, 100);
    square(mouseX - 100, mouseY - 100, 100);
    square(mouseX + 100, mouseY + 100, 100);
}