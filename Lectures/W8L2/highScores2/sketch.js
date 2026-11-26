let computerFont, scores, startY, scoresY, scoresHeight;

async function setup() {
    createCanvas(400, 400);
    scores = await loadStrings("assets/high_scores.txt");
    computerFont = await loadFont("assets/PressStart2P-Regular.ttf");
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
        let parts = score.split(" ");
        display += parts.join(" ................. ") + "\n";
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