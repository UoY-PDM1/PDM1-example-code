let star1X, star1Y, star2X, star2Y, star3X, star3Y;

function setup() {
    createCanvas(400, 300);
    noStroke();
    star1X = random(width);
    star1Y = random(height);
    star2X = random(width);
    star2Y = random(height);
    star3X = random(width);
    star3Y = random(height);
}

function draw() {
    background(0, 0, 50);
    star(star1X, star1Y);
    star(star2X, star2Y);
    star(star3X, star3Y);
}

function star(x, y) {
    fill(255, 234, 0);
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}