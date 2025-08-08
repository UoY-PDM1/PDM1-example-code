let rectX, rectY;
let rectW = 200;
let rectH = 100;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    rectX = random(100, 300);
    rectY = random(100, 300);
}

function draw() {
    background(255);
    rect(rectX, rectY, rectW, rectH);
}

function mouseDragged() {
    // If the mouse is over the rectangle...
    if (mouseX >= rectX - rectW / 2 && mouseX <= rectX + rectW / 2
        && mouseY >= rectY - rectH / 2 && mouseY <= rectY + rectH / 2) {
        rectX = mouseX;
        rectY = mouseY;
    }
}