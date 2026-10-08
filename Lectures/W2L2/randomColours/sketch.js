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
    
    /*
    r = r + 1; // can also be written as r += 1 or r++;
    r = r % 255; // can also be written as r %= 255;
    g = g + 1; // can also be written as g += 1 or g++;
    g = g % 255; // can also be written as g %= 255;
    b = b + 1; // can also be wrtten as b += 1 or b++;
    b = b % 255; // can also be written as b %= 255;
    */
}
