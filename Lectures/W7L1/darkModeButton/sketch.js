let darkMode, lightMode;
const msg = "The quick brown fox jumps over the lazy dog.";

// Variables related to the button
let modeButton;
let buttonText = "Toggle Mode";
let isLightMode = true;

function setup() {
    createCanvas(400, 300);
    noStroke();
    darkMode = new ColourMode(color(0), color(255));
    lightMode = new ColourMode(color(255), color(0));
    buttonSetup();
}

function draw() {
    if (isLightMode) {
        background(lightMode.bgColour);
        fill(lightMode.textFill);
    } else {
        background(darkMode.bgColour);
        fill(darkMode.textFill);
    }
    textSize(32);
    textAlign(CENTER, CENTER);
    text(msg, 10, 10, width - 20, height - 20);
}

/**
 * Configures the button's position and basic styling
 */
function buttonSetup() {
    modeButton = createButton(buttonText);
    const mainContainer = select("main");
    modeButton.parent(mainContainer);
    modeButton.size(100, 40);
    modeButton.position(width / 2 - 50, height - 50);
    modeButton.mouseClicked(toggleMode);
}

/**
 * Event listener. Called when the button is pressed. Toggles 
 * between light and dark mode.
 */
function toggleMode() {
    isLightMode = !isLightMode;
}

/**
 * Stores information about the colour scheme (background colour and text colour)
 */
class ColourMode {
    bgColour;
    textFill;

    /**
     * Creates a new ColourMode
     * @param {Color} bgColour The background colour
     * @param {Color} textFill The text fill colour
     */
    constructor(bgColour, textFill) {
        this.bgColour = bgColour;
        this.textFill = textFill;
    }
}