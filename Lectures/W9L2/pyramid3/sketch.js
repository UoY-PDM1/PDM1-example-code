const BLOCK_HEIGHT = 50;
let rectCount = 1;

function setup() {
    createCanvas(600, 400);
    rectMode(CENTER);
}

function draw() {
    background(255);
    fill(0);
    for (let i = 1; i <= rectCount; i++) {
        let yCoord = height - BLOCK_HEIGHT * i + BLOCK_HEIGHT / 2;
        let blockWidth = width - BLOCK_HEIGHT * (i - 1) * 2;
        rect(width / 2, yCoord, blockWidth, BLOCK_HEIGHT);
    }
}

function mouseClicked() {
    for (let i = 1; i <= rectCount; i++) {
        if (rectWasClicked(i)) {
            let newWidth = width - BLOCK_HEIGHT * rectCount * 2;
            if (newWidth > 0) {
                rectCount++;
            }
        }
    }
}

/**
 * Checks if a particular rectangle was clicked
 * @param {number} rectNum The number of the rectangle
 * @returns {boolean} True if the rectangle was clicked, false if not
 */
function rectWasClicked(rectNum) {
    let yCoord = height - BLOCK_HEIGHT * rectNum + BLOCK_HEIGHT / 2;
    let blockWidth = width - BLOCK_HEIGHT * (rectNum - 1) * 2;
    if (mouseX >= width / 2 - blockWidth / 2 && mouseX <= width / 2 + blockWidth / 2
        && mouseY >= yCoord - BLOCK_HEIGHT / 2 && mouseY <= yCoord + BLOCK_HEIGHT / 2) {
        return true;
    }
    return false;
}