let frog;

async function setup() {
    frog = await loadImage("assets/frog.jpg");
    createCanvas(600, 600);
}

function draw() {
    image(frog, 0, 0);
}