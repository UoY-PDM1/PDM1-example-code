function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
}

function draw() {
    background(255);
    fill(170);
    // Head
    rect(400, 235, 60, 70);
    // Neck
    rect(400, 285, 10, 30);
    // Mouth
    arc(400, 270, 40, 20, 0, PI, CHORD);
    // Torso
    square(400, 350, 100);
    // Left arm
    rect(465, 325, 30, 10);
    circle(485, 325, 10);
    rect(485, 370, 10, 80);
    circle(485, 420, 20);
    // Right arm
    rect(335, 325, 30, 10);
    circle(315, 325, 10);
    rect(315, 370, 10, 80);
    circle(315, 420, 20);
    // Left leg
    rect(420, 415, 10, 30);
    circle(420, 435, 10);
    rect(420, 480, 10, 80);
    arc(420, 520, 30, 20, PI, TWO_PI, CHORD);
    // Right leg
    rect(380, 415, 10, 30);
    circle(380, 435, 10);
    rect(380, 480, 10, 80);
    arc(380, 520, 30, 20, PI, TWO_PI, CHORD);
    // Eyes
    fill(207, 250, 23);
    arc(385, 250, 20, 30, PI, TWO_PI, CHORD);
    arc(415, 250, 20, 30, PI, TWO_PI, CHORD);
    // Antennae
    line(430, 230, 450, 220);
    line(370, 230, 350, 220);
    fill(255, 0, 0);
    circle(450, 220, 10);
    circle(350, 220, 10);
}