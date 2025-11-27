const BLOCK_HEIGHT = 50;
let yCoords = [];
let widths = [];

function setup() {
    createCanvas(600, 400);
    yCoords.push(height - BLOCK_HEIGHT / 2);
    widths.push(width);
    rectMode(CENTER);
}

function draw() {
    background(255);
    fill(0);
    for (let i = 0; i < yCoords.length; i++) {
        rect(width / 2, yCoords[i], widths[i], BLOCK_HEIGHT);
    }
}

function mouseClicked() {
    for (let i = 0; i < yCoords.length; i++) {
        if (mouseX >= width / 2 - widths[i] / 2 && mouseX <= width / 2 + widths[i] / 2
            && mouseY >= yCoords[i] - BLOCK_HEIGHT / 2 && mouseY <= yCoords[i] + BLOCK_HEIGHT / 2) {
            let newWidth = widths[widths.length - 1] - BLOCK_HEIGHT * 2;
            if (newWidth > 0) {
                yCoords.push(yCoords[yCoords.length - 1] - BLOCK_HEIGHT);
                widths.push(newWidth);
            }
        }
    }
}