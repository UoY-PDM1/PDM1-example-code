function setup() {
    createCanvas(400, 400);
    frameRate(1)
}

function draw() {
    for (let x = 0; x < width; x = x + 20) {
        for (let y = 0; y < height; y = y + 20) {
            fill(x, y, 255);
            square(x, y, 10);
        }
    }
}