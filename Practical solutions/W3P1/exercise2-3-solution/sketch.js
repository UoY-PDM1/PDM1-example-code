let shapeSelected = false;
let x = 200;
let y = 150;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER)
    fill(255);
}

function draw() {
    background(0);
    rect(x, y, 300, 200);
}

function mousePressed() {
    if (mouseX >= x - 150 && mouseX <= x + 150 && mouseY >= y - 100 && mouseY <= y + 100) {
        shapeSelected = true;
        fill(150, 0, 175);
    }
}

function mouseDragged() {
    if (shapeSelected) {
        x = mouseX;
        y = mouseY;
    }
}

function mouseReleased() {
    shapeSelected = false;
    fill(255);
}