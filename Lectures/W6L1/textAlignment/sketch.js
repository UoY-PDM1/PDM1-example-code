let computer

function preload() {
    computer = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
    stroke(255, 0, 255);
    strokeWeight(10);
    point(width / 2, height / 2);
    fill(255);
    noStroke();
    textFont(computer);
    textSize(36);
    textAlign(CENTER, BOTTOM);
    text("CENTER BOTTOM", width / 2, height / 2);
}