let xHistory = [];
let yHistory = [];

function setup() {
    createCanvas(600, 400);
    rectMode(CENTER);
    stroke(255, 0, 0);
    strokeWeight(10);
}

function draw() {
    background(255);
    for (let i = 0; i < xHistory.length; i++) {
        point(xHistory[i], yHistory[i]);
    }
}

function mouseClicked() {
    xHistory.push(mouseX);
    yHistory.push(mouseY);
}

function keyPressed() {
    if (key === "z") {
        undo();
    }
}

/**
 * Remove the most recent point.
 */
function undo() {
    xHistory.pop();
    yHistory.pop();
}