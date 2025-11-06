const LOREM_IPSUM = "Lorem ipsum dolor sit amet";
const MARGIN = 20;

function preload() {

}

function setup() {
    createCanvas(600, 600);
    textSize(60);
    textAlign(RIGHT, BOTTOM);
}

function draw() {
    background(6, 28, 160);
    // Optional extra
    if (mouseX >= width / 2 && mouseY >= height / 2) {
        fill(255, 193, 233);
    } else {
        fill(209, 239, 255);
    }
    text(LOREM_IPSUM, width / 2, height / 2, width / 2 - MARGIN, height / 2 - MARGIN);
}