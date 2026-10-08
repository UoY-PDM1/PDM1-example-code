function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {
    if (mouseIsPressed) {
        background(255, 0, 150);
        fill(0);
    } else {
        background(0);
        fill(255, 0, 150);
    }
    circle(width / 2, height / 2, width * 0.8);
}