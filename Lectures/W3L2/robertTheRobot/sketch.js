function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
}

function draw() {
    let centreX = mouseX; // 400
    let centreY = mouseY; // 350
    background(255);
    fill(170);
    // Head
    rect(centreX, centreY - 115, 60, 70);
    // Neck
    rect(centreX, centreY - 65, 10, 30);
    // Mouth
    arc(centreX, centreY - 80, 40, 20, 0, PI, CHORD);
    // Torso
    square(centreX, centreY, 100);
    // Left arm
    rect(centreX + 65, centreY - 25, 30, 10);
    circle(centreX + 85, centreY - 25, 10);
    rect(centreX + 85, centreY + 20, 10, 80);
    circle(centreX + 85, centreY + 70, 20);
    // Right arm
    rect(centreX - 65, centreY - 25, 30, 10);
    circle(centreX - 85, centreY - 25, 10);
    rect(centreX - 85, centreY + 20, 10, 80);
    circle(centreX - 85, centreY + 70, 20);
    // Left leg
    rect(centreX + 20, centreY + 65, 10, 30);
    circle(centreX + 20, centreY + 85, 10);
    rect(centreX + 20, centreY + 130, 10, 80);
    arc(centreX + 20, centreY + 170, 30, 20, PI, TWO_PI, CHORD);
    // Right leg
    rect(centreX - 20, centreY + 65, 10, 30);
    circle(centreX - 20, centreY + 85, 10);
    rect(centreX - 20, centreY + 130, 10, 80);
    arc(centreX - 20, centreY + 170, 30, 20, PI, TWO_PI, CHORD);
    // Eyes
    fill(207, 250, 23);
    arc(centreX - 15, centreY - 100, 20, 30, PI, TWO_PI, CHORD);
    arc(centreX + 15, centreY - 100, 20, 30, PI, TWO_PI, CHORD);
    // Antennae
    line(centreX + 30, centreY - 120, centreX + 50, centreY - 130);
    line(centreX - 30, centreY - 120, centreX - 50, centreY - 130);
    fill(255, 0, 0);
    circle(centreX + 50, centreY - 130, 10);
    circle(centreX - 50, centreY - 130, 10);
}