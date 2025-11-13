let fillPicker, brushSize, clearBtn;

function setup() {
    createCanvas(800, 600);
    const container = select("main");
    setupColourPicker(container);
    setupBrushSize(container);
    setupClearButton(container);
    
    textAlign(RIGHT, CENTER);
    textSize(18);
    noStroke();
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        fill(fillPicker.value());
        circle(mouseX, mouseY, brushSize.value());
    }
    drawControls();
}

/**
 * Draw the control panel at the bottom of the canvas. Note: the input controls themselves 
 * are drawn independently of the canvas when they are created. This function draws the 
 * background of the control panel and adds the text.
 */
function drawControls() {
    fill(200);
    rect(0, height - 60, width, 60);
    fill(0);
    text("Brush colour: ", 125, height - 30);
    text("Brush size: ", 300, height - 30);
    // Show a preview of the brush
    fill(fillPicker.value());
    circle(455, height - 30, brushSize.value());
}

/**
 * Creates and configures the brush colour picker.
 * @param {Element} main The <main> HTML element
 */
function setupColourPicker(main) {
    fillPicker = createColorPicker();
    fillPicker.parent(main);
    fillPicker.position(125, height - 45);
}

/**
 * Creates and configures the brush size slider.
 * @param {Element} main The <main> HTML element
 */
function setupBrushSize(main) {
    brushSize = createSlider(5, 50, 5);
    brushSize.parent(main);
    brushSize.position(300, height - 40);
}

/**
 * Creates and configures the clear button.
 * @param {Element} main The <main> HTML element
 */
function setupClearButton(main) {
    clearBtn = createButton("Clear");
    clearBtn.parent(main);
    clearBtn.position(720, height - 45);
    /* New syntax! The argument passed to mouseClicked is called an arrow function. 
    When the button is clicked, it will run the statement after the arrow =>
    */
    clearBtn.mouseClicked(() => background(255));
}