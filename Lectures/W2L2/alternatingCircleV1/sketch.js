let x = 0;
let movingRight = true;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    circle(x, height / 2, 100);
    if (movingRight && x < width) {
        x += 3; // Shorthand for x = x + 3
    }
    else if (movingRight && x >= width) {
        movingRight = false;
    }
    else if (!movingRight && x > 0) {
        x -= 3; // Shorthand for x = x - 3
    }
    else {
        movingRight = true;
    }
}
