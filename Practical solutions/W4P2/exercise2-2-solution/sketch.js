function setup() {
    createCanvas(400, 400);
}

function draw() {
    for (let x = 0; x < width; x += 50) {
        setFill(x);
        rect(x, 0, 50, height);
    }
}

/**
 * Sets the fill of a rectangle.
 * @param {number} x The x coordinate of the rectangle to fill
 */
function setFill(x) {
    if (isSelected(x)) {
        fill(0, 0, 255);
    } else {
        fill(255, 255, 255);
    }
}

/**
 * Checked if a rectangle has been selected
 * @param {number} x The x coordinate of a rectangle
 * @returns {boolean}
 */
function isSelected(x) {
    return mouseIsPressed && mouseX >= x && mouseX < x + 50
            && mouseY >= 0 && mouseY < height;
}