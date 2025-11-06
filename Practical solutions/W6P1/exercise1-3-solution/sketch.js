let handwriting;
const loremIpsum = "Lorem ipsum dolor sit amet";
let display = "";
// alternative version using two
// let characterCount = 0;

function preload() {
    handwriting = loadFont("./assets/Caveat-VariableFont_wght.ttf");
}

function setup() {
    createCanvas(400, 300);
    textSize(36);
    textFont(handwriting);
    textAlign(LEFT, CENTER);
    fill(255);
    strokeWeight(3);
    stroke(255, 0, 255);
}

function draw() {
    background(0);
    if (frameCount % 30 === 0) {
        updateDisplay();
    }
    text(display, 50, 50, width - 100, height - 100);
    // alternative version
    //text(loremIpsum.slice(0, characterCount + 1), 50, 50, width - 100, height - 100);
}

/**
 * Adds another character to the display message or, if the message is 
 * complete, returns to the start.
 */
function updateDisplay() {
    if (display.length < loremIpsum.length) {
        display = loremIpsum.slice(0, display.length + 1);
    } else {
        display = "";
    }
    // alternative version
    // characterCount = (characterCount + 1) % loremIpsum.length; 
}