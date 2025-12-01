let batX = 30;
let batY = 300;
let batH = 70;
let batW = 30;
let batMoveAmount = 5;
let batGrowAmount = 5;
let batShrinkAmount = 2;
let ballX = 615;
let ballSpeed = -1;
let ballW = 30;
let ballDir = -1;
let ballY;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    background(0);
    if (keyIsPressed) {
        moveBat();
    }
    drawBat();
    drawBall();
    if (isHit()) {
        batH += batGrowAmount;
        ballDir = 1;
    } else if (isMiss()) {
        batH -= batShrinkAmount;
        ballSpeed++;
        ball.newThrow();
    }
    ball.update();
}

/**
 * Moves the bat.
 */
function moveBat() {
    if (key === "w" || keyCode === UP_ARROW) {
        batY -= batMoveAmount;
    } else if (key === "s" || keyCode === DOWN_ARROW) {
        batY += batMoveAmount;
    }
}

/**
 * Draws the bat.
 */
function drawBat() {
    fill(255);
    rect(batX, batY, batW, batH);
}

/**
 * Draws the ball.
 */
function drawBall() {
    fill(255, 255, 0);
    circle(ballX, ballY, ballW);
}

/**
 * Updates the ball based on it's current speed and direction.
 */
function updateBall() {
    ballX += ballSpeed * ballDir;
    if (ballHasReturned()) {
        newThrow();
    }
}

/**
 * Checks if the ball is moving right and passed the right edge of the screen.
 * @returns {boolean} True if the ball has returned, false otherwise.
 */
function ballHasReturned() {
    return ballDir === 1 && ballX >= width + ballW / 2;
}

/**
 * Checks if the bat has hit the ball
 * @returns {boolean} True if the bat has hit the ball, false otherwise
 */
function isHit() {
    return ballX - ballW / 2 <= batX + batW / 2 && ballY >= batY - batH / 2 &&
                ballY <= batY + batH / 2;
}

/**
 * Checks if the bat has missed the ball
 * @returns {boolean} True if the bat has missed the ball, false otherwise
 */
function isMiss() {
    return ballX <= -ballW / 2;
}

/**
 * Resets the ball so that it is moving left at a random y location
 */
function newThrow() {
    ballX = width + ballX / 2;
    ballDir = -1;
    ballY = random(ballW / 2, height - ballW / 2);
}