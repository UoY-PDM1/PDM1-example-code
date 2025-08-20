let font;
let player = "";
let errorMessage = "";
const NAME_LENGTH = 3;
const FONT_SIZE = 24;
const NAME_ERROR = "Name must be exactly 3 characters long. Try again.";
let nameEntered = false;

function preload() {
    font = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(600, 400);
    textFont(font);
    textSize(FONT_SIZE);
}

function draw() {
    background(0);
    if (nameEntered) {
        greetPlayer();
    } else {
        requestUserName();
    }
}

function keyPressed() {
    if (!nameEntered) {
        if (keyCode === ENTER) {
            validateInput();
        }
        else if (keyCode === DELETE || keyCode === BACKSPACE) {
            deleteCharacter();
        }
        else {
            addCharacter();
        }
    }
}

/**
 * Checks if the player name meets requirements.
 */
function validateInput() {
    if (player.length !== NAME_LENGTH) {
        errorMessage = NAME_ERROR;
    } else {
        nameEntered = true;
    }
}

/**
 * Deletes the last character in the player name.
 */
function deleteCharacter() {
    player = player.slice(0, player.length - 1);
}

/**
 * Adds the last character typed to the player name.
 */
function addCharacter() {
    player = (player + key).toUpperCase();
    errorMessage = "";
}

/**
 * Draws the username entry scene.
 */
function requestUserName() {
    drawPrompt();
    drawCursor();
    drawErrorMessage();
}

/**
 * Draws the prompt shown to the user and the name entered so far.
 */
function drawPrompt() {
    fill(0, 255, 100);
    textAlign(CENTER, BOTTOM);
    text("Enter your name:", width / 2, height / 2 - 5);
    textAlign(CENTER, TOP);
    text(player, width/2, height/2 + 5);
}

/**
 * Draws the blinking cursor.
 */
function drawCursor() {
    // Show the cursor for half a second, then hide for half a second
    if (frameCount % 60 < 30) {
        rectMode(CENTER);
        let nameWidth = textWidth(player);
        rect(width / 2 + nameWidth / 2 + FONT_SIZE / 2, height / 2 + FONT_SIZE / 2 + 2, 20, 28);
    }
}

/**
 * Draws the error message, if there is one.
 */
function drawErrorMessage() {
    fill(255, 0, 0);
    rectMode(CORNER);
    text(errorMessage, 0, height / 2 + FONT_SIZE * 2, width, 100);
}

/**
 * Draws a greeting message.
 */
function greetPlayer() {
    fill(0, 255, 100);
    textAlign(CENTER, CENTER);
    text(`Hello, ${player}!`, width / 2, height / 2);
}