let computer

function preload() {
    computer = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    fill(255);
    textFont(computer);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Wrap this text over two lines", 100, 100, 400, 200);
}


