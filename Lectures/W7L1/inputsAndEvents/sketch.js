// These variables will all store different form controls
let counterBtn, slider, colourPicker, radioGroup, checkBox, textInput, saveBtn;

let clickCounter = 0;
let bgColour;
let user = "";

// This will store the reference to <main>
let container;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    bgColour = color(255);
    container = select("main");
    configureCounterButton();
    configureSlider();
    configureColourPicker();
    configureRadioGroup();
    configureCheckBox();
    configureTextInput();
}

function draw() {
    bgColour = colourPicker.color();
    background(bgColour);
    // Use the checkbox to set the text style
    if (checkBox.checked()) {
        textStyle(ITALIC);
    } else {
        textStyle(NORMAL);
    }
    // Use the slider to set the text size
    textSize(slider.value());
    // Show the counter next to the button
    textAlign(LEFT, TOP);
    text(`You have clicked ${clickCounter} time(s)`, 150, 52);
    // Use the selected radio button
    if (radioGroup.value() === "circle") {
        circle(250, 350, 50);
    } else if (radioGroup.value() === "square") {
        square(250, 350, 50);
    }
    // Name text field
    text("Name:", 50, 550);
    if (user !== "") {
        text(`Hello, ${user}`, 50, 575)
    }
}

/**
 * Creates the button.
 */
function configureCounterButton() {
    counterBtn = createButton("Click Me!");
    counterBtn.parent(container);
    counterBtn.position(50, 50);
    counterBtn.mouseClicked(buttonClicked);
}

/**
 * Event listener for mouse clicks on a button. Passed to the button's mouseClicked() method.
 */
function buttonClicked() {
    clickCounter++;
}

/**
 * Creates the slider.
 */
function configureSlider() {
    slider = createSlider(12, 48, 16, 2);
    slider.parent(container);
    slider.position(50, 150);
}

/**
 * Creates the colour picker.
 */
function configureColourPicker() {
    colourPicker = createColorPicker(bgColour);
    colourPicker.parent(container);
    colourPicker.position(50, 250);
}

/**
 * Configures the radio group.
 */
function configureRadioGroup() {
    radioGroup = createRadio();
    radioGroup.option("circle");
    radioGroup.option("square");
    radioGroup.parent(container);
    radioGroup.position(50, 350);
    radioGroup.selected("circle");
}

/**
 * Creates the check box.
 */
function configureCheckBox() {
    checkBox = createCheckbox("Make text italic");
    checkBox.parent(container);
    checkBox.position(50, 450);
}

/**
 * Creates the input box and the save button.
 */
function configureTextInput() {
    textInput = createInput();
    textInput.parent(container);
    textInput.position(75 + textWidth("Name:"), 550);
    textInput.size(100);

    saveBtn = createButton("Save");
    saveBtn.parent(container);
    saveBtn.position(225, 550);
    saveBtn.mouseClicked(saveName);
}

/**
 * Click event listener for the save button.
 */
function saveName() {
    user = textInput.value();
}