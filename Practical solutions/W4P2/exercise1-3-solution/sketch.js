function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    strokeWeight(3);
}

function draw() {
    background(255);
    let y = 0;
    while (y <= height) {
        // blue
        stroke(7, 199, 247);
        line(width / 2, height / 2, width, y);
        // black
        stroke(0);
        line(width, 0, 0, y);
        // pink
        stroke(252, 3, 215);
        line(0, y, width, height);
        y += 10;
    }
}