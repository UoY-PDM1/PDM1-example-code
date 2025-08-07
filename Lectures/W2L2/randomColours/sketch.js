let r;
let g;
let b;

function setup() {
    createCanvas(400, 400);
    r = random(256);
    g = random(256);
    b = random(256);
}

function draw() {
    background(0);
    fill(r, g, b);
    circle(width / 2, height / 2, width * 0.8);
    r++;
    r %= 255;
    g++;
    g %= 255;
    b++;
    b %= 255;
}
