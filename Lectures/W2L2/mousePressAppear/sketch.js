function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(255, 0, 150);
}

function draw() {
    background(0);
    if (mouseIsPressed) {
        circle(width / 2, height / 2, width * 0.8);
    }
}
