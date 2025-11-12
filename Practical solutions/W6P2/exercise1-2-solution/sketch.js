function setup() {
    createCanvas(400, 400);
}

function draw() {

}

function mouseClicked() {
    let coordinate = new Coordinate(mouseX, mouseY);
    if (coordinate.isInBounds(0, 0, width, height)) {
        fill(random(155), random(255), random(255));
        ellipse(random(width), random(height), random(50, 100), random(50, 100));
    }
}

/**
 * A class representing an x, y coordinate.
 * 
 * Note: it is OK to define the class at the bottom of the sketch because it 
 * is not called until draw() is called, which is after the definition is parsed 
 * by the interpreter.
 */
class Coordinate {
    x;
    y;

    /**
     * Creates a new Coordinate.
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Checks if the coordinate is inside a provided bounding box.
     * @param {number} shapeX The top left x coordinate of the bounding box
     * @param {number} shapeY The top left y coordinate of the bounding box
     * @param {number} shapeW The width of the bounding box
     * @param {number} shapeH The height of the bounding box
     * @returns {boolean} True if the coordinates is inside the bounding box, false otherwise
     */
    isInBounds(shapeX, shapeY, shapeW, shapeH) {
        return this.x >= shapeX && this.x <= shapeX + shapeW
                && this.y >= shapeY && this.y <= shapeY + shapeH;
    }
}