let frog;

async function setup() {
    frog = await loadImage("assets/frog.jpg");
    createCanvas(frog.width, frog.height);
}

function draw() {
    image(frog, 0, 0);
}