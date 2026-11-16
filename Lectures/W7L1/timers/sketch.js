let bgColour;
let circles = [];

function setup() {
    createCanvas(400, 400);
    bgColour = randomColour();

    // This changeBackgroundColour will be called every three seconds
    setInterval(changeBackgroundColour, 3000);
}

function draw() {
    background(bgColour);
    for (let circ of circles) {
        circle(circ.x, circ.y, 100);
    }
}

function mouseClicked() {
    circles.push({
        x: mouseX,
        y: mouseY
    });
    // Set a one-off timer that will remove the oldest element after 5 seconds
    setTimeout(removeOldestCircle, 5000);
}

/**
 * Changes the background colour to a random colour.
 */
function changeBackgroundColour() {
    bgColour = randomColour();
}

/**
 * Removes the oldest circle in the circles array.
 */
function removeOldestCircle() {
    circles.shift();
}

/**
 * Generates a random colour.
 * @returns {p5.Color} An RGB colour
 */
function randomColour() {
    return color(random(255), random(255), random(255));
}