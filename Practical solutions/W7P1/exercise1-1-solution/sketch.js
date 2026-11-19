let btn;

function setup() {
    createCanvas(400, 400);
    background(getRandomColour());
    const container = select("main");
    btn = createButton("add circle");
    btn.size(width, 50);
    btn.position(0, height - 50);
    btn.parent(container);
    btn.mouseClicked(buttonClicked);
}

function draw() {
}

/**
 * Function to call when the button is clicked.
 */
function buttonClicked() {
    fill(getRandomColour());
    circle(random(width), random(height), random(20, 50));
}

/**
 * Gets a random colour.
 * @returns {p5.Color} An RGB color object
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}