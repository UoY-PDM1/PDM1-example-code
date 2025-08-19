let xCoordinates = [20, 20, 20, 20];
let speeds = [1, 2, 3, 4];

function setup() {
    createCanvas(400, 250);
}

function draw() {
    background(0);
    for (let i = 0; i < xCoordinates.length; i++) {
        circle(xCoordinates[i], 50 * (i + 1), 40);
        xCoordinates[i] += speeds[i];
        if (xCoordinates[i] < 20 || xCoordinates[i] > width - 20) {
            speeds[i] *= -1;
        }
    }
}