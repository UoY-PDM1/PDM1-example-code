let computerFont, scores, startY, scoresY, scoresHeight;

function preload() {
    scores = loadStrings("assets/high_scores.txt");
    computerFont = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(400, 400);
    startY = height;
    scoresY = startY;
    scoresHeight = 15 * (scores.length + 1); // Guess that each line takes up roughly 15 pixels with padding
    textSize(12);
    textFont(computerFont);
    textAlign(CENTER, TOP);
    fill(0, 255, 100);
}

function draw() {
    background(0);
    let display = "HIGH SCORES\n";
    for (let score of scores) {
        display += score + "\n";
    }
    text(display, 0, scoresY, width, scoresHeight);
    moveText();
}

/**
 * Calculates the next y location of the scrolling text
 */
function moveText() {
    if (scoresY <= -scoresHeight) {
        scoresY = startY;
    } else {
        scoresY--;
    }
}