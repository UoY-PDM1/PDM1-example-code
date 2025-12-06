function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    if (mouseIsPressed) {
        rect(random(width), random(height), random(10, 50), random(10, 50));
    }
}