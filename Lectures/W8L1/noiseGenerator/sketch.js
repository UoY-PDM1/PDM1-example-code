let brownNoise, pinkNoise, whiteNoise;

function setup() {
    createCanvas(400, 400);
    noStroke();
    brownNoise = new Generator(new p5.Noise("brown"), 0, 0, 200, color(173, 89, 0));
    pinkNoise = new Generator(new p5.Noise("pink"), 200, 0, 200, color(255, 0, 255));
    whiteNoise = new Generator(new p5.Noise("white"), 0, 200, 200, color(255));
}

function draw() {
    background(0);
    brownNoise.draw();
    pinkNoise.draw();
    whiteNoise.draw();
    checkMousePosition();
}

/**
 * Checks if the mouse is currently over a noise generator square 
 * and turns generators on / off as appropriate.
 */
function checkMousePosition() {
    if (brownNoise.isMouseOver()) {
        brownNoise.play();
        pinkNoise.stop();
        whiteNoise.stop();
    } else if (pinkNoise.isMouseOver()) {
        pinkNoise.play();
        brownNoise.stop();
        whiteNoise.stop();
    } else if (whiteNoise.isMouseOver()) {
        whiteNoise.play();
        pinkNoise.stop();
        brownNoise.stop();
    } else {
        pinkNoise.stop();
        brownNoise.stop();
        whiteNoise.stop();
    }
}

/**
 * A noise generator control
 */
class Generator {
    #noise;
    #x;
    #y;
    #width;
    #colour
    #isPlaying = false;

    /**
     * Creates a new Generator
     * @param {p5.Noise} noise A p5.js noise generator object
     * @param {number} x The x coordinate of the UI control
     * @param {number} y The y coordinate of the UI control
     * @param {number} width The width of the UI control
     * @param {p5.Color} colour The colour of the noise and control
     */
    constructor(noise, x, y, width, colour) {
        this.#noise = noise;
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#colour = colour
    }

    /**
     * Draws the noise generator control.
     */
    draw() {
        fill(this.#colour);
        square(this.#x, this.#y, this.#width);
    }

    /**
     * Checks if the mouse is currently over the noise generator control
     * @returns {boolean} True if the mouse is over the control, false if not.
     */
    isMouseOver() {
        return mouseX >= this.#x && mouseX < this.#x + this.#width
                && mouseY >= this.#y && mouseY < this.#y + this.#width;
    }

    /**
     * Starts the noise generator if it is not already playing
     */
    play() {
        if (!this.#isPlaying) {
            this.#noise.start();
            this.#isPlaying = true;
        }
    }

    /**
     * Stops the noise generator
     */
    stop() {
        if (this.#isPlaying) {
            this.#noise.stop();
            this.#isPlaying = false;
        }
    }
}