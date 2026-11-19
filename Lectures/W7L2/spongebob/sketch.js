let bg;
let sponge;

async function setup() {
    bg = await loadImage("assets/background.jpg");
    sponge = await loadImage("assets/spongebob.png");
    createCanvas(bg.width, bg.height);
    imageMode(CENTER);
}

function draw() {
    //background(255);
    image(bg, width / 2, height / 2);
    image(sponge, mouseX, mouseY);
}

function keyPressed() {
    if (key === "s") {
        saveCanvas("spongebob.jpg");
    }
}