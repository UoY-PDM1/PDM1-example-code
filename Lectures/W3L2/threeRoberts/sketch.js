let robot1X, robot1Y, robot2X, robot2Y, robot3X, robot3Y, robot1Colour, robot2Colour, robot3Colour;
function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    robot1X = random(100, width - 100);
    robot1Y = random(100, height - 200);
    robot2X = random(100, width - 100);
    robot2Y = random(100, height - 200);
    robot3X = random(100, width - 100);
    robot3Y = random(100, height - 200);
    robot1Colour = color(random(255), random(255), random(255));
    robot2Colour = color(random(255), random(255), random(255));
    robot3Colour = color(random(255), random(255), random(255));
}

function draw() {
    background(255);
    robot(robot1X, robot1Y, robot1Colour);
    robot(robot2X, robot2Y, robot2Colour);
    robot(robot3X, robot3Y, robot3Colour);
}

function robot(x, y, bodyColour) {
    head(x, y, bodyColour);
    body(x, y, bodyColour);
    legs(x, y, bodyColour);
}

function head(x, y, bodyColour) {
    fill(bodyColour);
    // Head
    rect(x, y - 115, 60, 70);
    // Neck
    rect(x, y - 65, 10, 30);
    // Mouth
    arc(x, y - 80, 40, 20, 0, PI, CHORD);
    // Eyes
    fill(207, 250, 23);
    arc(x - 15, y - 100, 20, 30, PI, TWO_PI, CHORD);
    arc(x + 15, y - 100, 20, 30, PI, TWO_PI, CHORD);
    // Antennae
    line(x + 30, y - 120, x + 50, y - 130);
    line(x - 30, y - 120, x - 50, y - 130);
    fill(255, 0, 0);
    circle(x + 50, y - 130, 10);
    circle(x - 50, y - 130, 10);
}

function body(x, y, bodyColour) {
    fill(bodyColour);
    // Torso
    square(x, y, 100);
    // Left arm
    rect(x + 65, y - 25, 30, 10);
    circle(x + 85, y - 25, 10);
    rect(x + 85, y + 20, 10, 80);
    circle(x + 85, y + 70, 20);
    // Right arm
    rect(x - 65, y - 25, 30, 10);
    circle(x - 85, y - 25, 10);
    rect(x - 85, y + 20, 10, 80);
    circle(x - 85, y + 70, 20);
}

function legs(x, y, bodyColour) {
    fill(bodyColour);
    // Left leg
    rect(x + 20, y + 65, 10, 30);
    circle(x + 20, y + 85, 10);
    rect(x + 20, y + 130, 10, 80);
    arc(x + 20, y + 170, 30, 20, PI, TWO_PI, CHORD);
    // Right leg
    rect(x - 20, y + 65, 10, 30);
    circle(x - 20, y + 85, 10);
    rect(x - 20, y + 130, 10, 80);
    arc(x - 20, y + 170, 30, 20, PI, TWO_PI, CHORD);
}