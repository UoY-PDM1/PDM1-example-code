function setup() {
    createCanvas(200, 200);
}

function draw() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(255), random(255), random(255));
            point(x, y);
        }
    }
}