/**
 * A class representing a UI button.
 */
class Button {
    /* All instance variables are private. This is a design choice in 
    keeping with the information hiding principle. You may disagree 
    with this choice! */
    #x;
    #y;
    #width;
    #height;
    #label;

    /**
     * Creates a new Button.
     * @param {number} x The x coordinate of the button (CORNER mode).
     * @param {number} y The y coordinate of the button (CORNER mode).
     * @param {number} width The width of the button.
     * @param {number} height The height of the button.
     * @param {string} label The text to display on the button.
     */
    constructor(x, y, width, height, label) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
        this.#label = label;
    }

    /**
     * Draws the button at its specified location and dimensions. Also 
     * displays the label on the button. If the mouse is over the button, 
     * the button's fill colour will be blue (0, 0, 255). Otherwise, it 
     * will be black.
     */
    draw() {
        textAlign(CENTER, CENTER);
        textSize(36);
        let isHovered = this.#mouseIsOver();
        if (isHovered) {
            fill(0, 0, 255);
        } else {
            fill(0);
        }
        rect(this.#x, this.#y, this.#width, this.#height);
        fill(255);
        text(this.#label, this.#x, this.#y, this.#width, this.#height);
    }

    /**
     * A private method that checks if the mouse is over the button. 
     * @returns {boolean} True if the mouse is over the button, false otherwise.
     */
    #mouseIsOver() {
        return mouseX >= this.#x && mouseX <= this.#x + this.#width && mouseY >= this.#y && mouseY <= this.#y + this.#height;
    }

    /**
     * Checks if button is clicked--the mouse is over the button and the mouse 
     * is currently pressed.
     * @returns {boolean} True if the button is clicked, false otherwise.
     */
    clicked() {
        return this.#mouseIsOver() && mouseIsPressed;
    }
}

let btn = new Button(100, 100, 200, 100, "Click me!");
let counter = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    btn.draw();
    fill(0);
    text(`The button has been clicked ${counter} time(s).`, 0, 300, width, 100);
}

function mousePressed() {
    if (btn.clicked()) {
        counter++;
    }
}

