let handwriting, sans, currentFont;
const loremIpsum = "Lorem ipsum dolor sit amet";

function preload() {
    handwriting = loadFont("./assets/Caveat-VariableFont_wght.ttf");
    sans = loadFont("./assets/RussoOne-Regular.ttf");
}

function setup() {
    createCanvas(400, 300);
    textSize(36);
    currentFont = handwriting;
    textAlign(LEFT, CENTER);
    fill(255);
    strokeWeight(3);
    stroke(255, 0, 255);
}

function draw() {
    background(0);
    textFont(currentFont);
    text(loremIpsum, 50, 50, width - 100, height - 100);
}

function keyReleased() {
    if (key === "f") {
        if (currentFont === handwriting) {
            currentFont = sans;
        } else {
            currentFont = handwriting;
        }
    }
}