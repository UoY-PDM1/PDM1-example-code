function setup() {
    createCanvas(400, 200); // Try changing these numbers... the relative proportions of the rectangles should stay the same!
    noStroke(); // optional
}

function draw() {
    background(255);
    fill(0, 0, 255);
    rect(0, 0, width / 2, height);
    fill(100, 100, 255);
    rect(width / 2, 0, width / 2, height / 2);
    fill(0, 0, 50);
    rect(width / 2, height / 2, width / 4, height / 2);
    fill(155, 0, 155);
    rect(width * 0.75, height / 2, width / 4, height / 4);
    fill(255, 0, 155);
    rect(width * 0.75, height * 0.75, width / 4, height / 4);
}