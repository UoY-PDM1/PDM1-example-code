let xCoordinates = [20, 20, 20, 20];
let speeds = [1, 2, 3, 4];

function setup() {
    createCanvas(400, 250);
}

function draw() {
    background(0);
    circle(xCoordinates[0], 50, 40);
    circle(xCoordinates[1], 100, 40);
    circle(xCoordinates[2], 150, 40);
    circle(xCoordinates[3], 200, 40);

    xCoordinates[0] += speeds[0];
    xCoordinates[1] += speeds[1];
    xCoordinates[2] += speeds[2];
    xCoordinates[3] += speeds[3];

    if (xCoordinates[0] < 20 || xCoordinates[0] > width - 20) {
        speeds[0] *= -1;
    }
    if (xCoordinates[1] < 20 || xCoordinates[1] > width - 20) {
        speeds[1] *= -1;
    }
    if (xCoordinates[2] < 20 || xCoordinates[2] > width - 20) {
        speeds[2] *= -1;
    }
    if (xCoordinates[3] < 20 || xCoordinates[3] > width - 20) {
        speeds[3] *= -1;
    }
}