let frog;

function preload() {
    frog = loadImage("assets/frog.jpg");
}

function setup() {
    createCanvas(frog.width, frog.height);
}

function draw() {
    image(frog, 0, 0);
}