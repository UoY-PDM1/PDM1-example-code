let diameters = [360, 280, 200, 150];
let colourVals = [60, 140, 180, 255];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    for (let i = 0; i < diameters.length; i++) {
        fill(255 - colourVals[i], colourVals[i], colourVals[i]);
        circle(width / 2, height / 2, diameters[i]);
    }
}

function mouseClicked() {
    let lastColour = colourVals.pop();
    colourVals.unshift(lastColour);
}