function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(255, 0, 150);
    background(0);
}

function draw() {
    if (mouseIsPressed) {
        circle(random(width + 1), random(height + 1), random(10, 101));
    }
    if (keyIsPressed) {
        background(0);
    }
}