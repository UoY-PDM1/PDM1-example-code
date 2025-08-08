function setup() {
    createCanvas(400, 400);
}

function draw() {
    let bgColour = constrain(mouseX, 0, width);
    console.log("mouseX:", mouseX, "constrained value:", bgColour);
    bgColour = bgColour / width * 255;
    background(bgColour);
    // console.log(bgColour);
}
