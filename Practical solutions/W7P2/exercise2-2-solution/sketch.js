let day, night;
// Tracks the progress of a wipe
let counter = 0;

function preload() {
    day = loadImage("assets/blue-sky.jpg");
    night = loadImage("assets/night-sky.jpg");
}

function setup() {
    createCanvas(day.width, day.height);
}

function draw() {
    image(night, 0, 0)
    image(day, 0, 0);
    horizontalWipe();
    // verticalWipe();
    // rectWipe();
    // stripeWipe();
}

/**
 * Creates a horizontal wipe effect.
 */
function horizontalWipe() {
    if (counter < width) {
        removeColumn(counter);
        counter++;
    }
}

/**
 * Creates a vertical wipe effect.
 */
function verticalWipe() {
    if (counter < height) {
        removeRow(counter);
        counter++
    }
}

/**
 * Creates a rectangle wipe effect
 */
function rectWipe() {
    if (counter < width / 2) {
        let topY = height / 2 - counter;
        let bottomY = height / 2 + counter - 1;
        if (topY !== bottomY) {
            day.loadPixels();
            for (let x = width / 2 - counter; x < width / 2 + counter; x++) {
                makePixelTransparent(x, topY);
                makePixelTransparent(x, bottomY);
            }
            for (let y = topY + 1; y < bottomY; y++) {
                makePixelTransparent(width / 2 - counter, y);
                makePixelTransparent(width / 2 + counter - 1, y);
            }
            day.updatePixels();
        }
        counter++;
    }
}

/**
 * Creates a stripe wipe
 */
function stripeWipe() {
    if (counter <= 100) {
        day.loadPixels();
        makeStripe(100);
        makeStripe(300);
        makeStripe(500);
        makeStripe(700);
        day.updatePixels();
        counter++;
    }
}

/**
 * Replaces a column of pixels on either side of a stripe.
 * @param {number} colX The centre of the stripe on the x axis
 */
function makeStripe(colX) {
    const left = colX - counter;
    const right = colX + counter - 1;
    if (left !== right) {
        removeColumn(left);
        removeColumn(right);
    }
}

/**
 * Converts the x, y coordinates of a pixel to the index of its red 
 * channel in the pixels array.
 * @param {number} x The x coordinate
 * @param {number} y The y coordinate
 * @returns {number} The index of the pixel in the pixels array
 * @example
 * For each of the following, assume a 200 pixel width canvas
 * getIndexOfPixel(0, 0); // returns 0
 * getIndexOfPixel(199, 0); // returns 796
 * getIndexOfPixel(0, 1); // returns 800
 * getIndexOfPixel(1, 2); // returns 1604
 * 
 * For each of the following, assume a 300 pixel width canvas
 * getIndexOfPixel(0, 0); // returns 0
 * getIndexOfPixel(199, 0); // returns 796
 * getIndexOfPixel(0, 1); // returns 1200
 * getIndexOfPixel(1, 2); // returns 2404
 */
function getIndexOfPixel(x, y) {
    return (y * width + x) * 4;
}

/**
 * Makes a pixel transparent
 * @param {number} x The x coordinate
 * @param {number} y The y coordinate
 */
function makePixelTransparent(x, y) {
    const index = getIndexOfPixel(x, y);
    day.pixels[index + 3] = 0;
}

/**
 * Removes (or rather replaces) a column of pixels in the day image.
 * @param {number} col The x coordinate of the column
 */
function removeColumn(col) {
    day.loadPixels();
    for (let y = 0; y < height; y++) {
        makePixelTransparent(col, y);
    }
    day.updatePixels();
}

/**
 * Removes (or rather replaces) a row of pixels in the day image.
 * @param {number} row The y coordinate of the row
 */
function removeRow(row) {
    day.loadPixels();
    for (let x = 0; x < width; x++) {
        makePixelTransparent(x, row);
    }
    day.updatePixels();
}
