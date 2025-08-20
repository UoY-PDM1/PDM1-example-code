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

function keyPressed() {
    if (key === "i") {
        frog.loadPixels();
        const pixelTotal = frog.width * frog.height * 4;
        for (let i = 0; i < pixelTotal; i += 4) {
            let currentRed = frog.pixels[i];
            let currentGreen = frog.pixels[i+1];
            let currentBlue = frog.pixels[i+2];
            // Replace red with blue
            frog.pixels[i] = currentBlue;
            // Replace green with red
            frog.pixels[i+1] = currentRed;
            // Replace blue with green
            frog.pixels[i+2] = currentGreen;
        }
        frog.updatePixels();
    }
}
