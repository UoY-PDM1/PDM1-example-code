let bg, sponge;

function preload() {
    bg = loadImage("assets/background.jpg");
    sponge = loadImage("assets/spongebob.png");
}

function setup() {
    createCanvas(bg.width, bg.height);
    imageMode(CENTER);
}

function draw() {
    image(bg, width / 2, height / 2);
    image(sponge, mouseX, mouseY);
}

function keyPressed() { 
    if (key === "s") {
        saveCanvas("mySpongebob.jpg");
    }
}