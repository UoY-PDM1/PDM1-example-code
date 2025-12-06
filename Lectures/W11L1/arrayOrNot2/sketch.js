/**
 * Create a sketch with a black background. When the user clicks 
 * the mouse, draw a circle with a random fill colour at the mouse 
 * coordinates. When a new circle is added, the previous circles 
 * remain on screen but all circles should have the new fill colour.
 */
let circleX = [];
let circleY = [];

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    for (let i = 0; i < circleX.length; i++) {
        circle(circleX[i], circleY[i], 50);
    }
}

function mouseClicked() {
    circleX.push(mouseX);
    circleY.push(mouseY);
    fill(random(255), random(255), random(255));
}