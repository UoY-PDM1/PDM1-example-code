function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    fill(255, 255, 255, 160);
    circle(mouseX, mirrorCoordinate(mouseY), 50);
    fill(255, 255, 0, 160);
    circle(mouseX, mouseY, 50);
    fill(255, 0, 255, 160);
    circle(mirrorCoordinate(mouseX), mirrorCoordinate(mouseY), 50);
    fill(0, 255, 255, 160);
    circle(mirrorCoordinate(mouseX), mouseY, 50);
}

/**
 * Returns the mirrored version of a pixel value. Assumes a square canvas.
 * @param {number} coordinate The value to mirror
 * @returns {number} The mirrored value
 */
function mirrorCoordinate(coordinate) {
    const newCoordinate = width - coordinate;
    return newCoordinate;
}

/**
 * Test function for testing mirrorCoordinate. Not to be used elsewhere.
 */
function testMirrorCoordinate() {
    console.log("mirrorCoordinate(-300) returns 900", mirrorCoordinate(-300));
    console.log("mirrorCoordinate(0) returns 600", mirrorCoordinate(0));
    console.log("mirrorCoordinate(102) returns 498", mirrorCoordinate(102));
    console.log("mirrorCoordinate(300) returns 300", mirrorCoordinate(300));
    console.log("mirrorCoordinate(403) returns 197", mirrorCoordinate(403));
    console.log("mirrorCoordinate(600) returns 0", mirrorCoordinate(600));
    console.log("mirrorCoordinate(950) returns -350", mirrorCoordinate(950));
}