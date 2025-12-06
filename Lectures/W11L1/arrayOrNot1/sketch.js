/**
 * Create a sketch with a black background. When the user clicks 
 * the mouse, draw a circle with a random fill colour at the mouse 
 * coordinates. There should only be one circle on screen at a time
 * –when a new circle is added, the previous circle should disappear.
 */


function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    
}

function mouseClicked() {
    background(0);
    fill(color(random(255), random(255), random(255)));
    circle(mouseX, mouseY, 50);
}