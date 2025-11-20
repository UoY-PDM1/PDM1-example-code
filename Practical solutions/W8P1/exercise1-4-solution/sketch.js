let robert, mic;

function setup() {
    createCanvas(800, 800);
    robert = new Robot(width / 2, height / 2, color(150));
    mic = new p5.AudioIn();
    // Delays the start of the microphone until the user interacts
    getAudioContext().suspend();
    mic.start();
}

function draw() {
    background(255);
    robert.talk(mic.getLevel());
    robert.draw();
}

function mouseClicked() {
    // Confirms that the user has started the audio
    userStartAudio();
}

/**
 * Creates a robot
 */
class Robot {
    #x;
    #y;
    #colour;
    #mouthPosition = 0;

    /**
     * Creates a new robot
     * @param {number} x The x coordinate of the robot
     * @param {number} y The y coordinate of the robot
     * @param {p5.Color} colour The body colour of the robot
     */
    constructor(x, y, colour) {
        this.#x = x;
        this.#y = y;
        this.#colour = colour;
    }

    /**
     * Draws the robot
     */
    draw() {
        rectMode(CENTER);
        this.#head();
        this.#body();
        this.#legs();
    }

    /**
     * Makes the robot talk by adjusting the mouth position
     * @param {number} amount The amplitude / level of the sound
     */
    talk(amount) {
        console.log(amount);
        this.#mouthPosition = amount * 100;
    }

    /**
     * Helper method. Draws the robot's head.
     */
    #head() {
        fill(this.#colour);
        // Head
        rect(this.#x, this.#y - 115, 60, 70);
        // Neck
        rect(this.#x, this.#y - 65, 10, 30);
        // Mouth
        arc(this.#x, this.#y - 80 + this.#mouthPosition, 40, 20, 0, PI, CHORD);
        // Eyes
        fill(207, 250, 23);
        arc(this.#x - 15, this.#y - 100, 20, 30, PI, TWO_PI, CHORD);
        arc(this.#x + 15, this.#y - 100, 20, 30, PI, TWO_PI, CHORD);
        // Antennae
        line(this.#x + 30, this.#y - 120, this.#x + 50, this.#y - 130);
        line(this.#x - 30, this.#y - 120, this.#x - 50, this.#y - 130);
        fill(255, 0, 0);
        circle(this.#x + 50, this.#y - 130, 10);
        circle(this.#x - 50, this.#y - 130, 10);
    }

    /**
     * Helper method. Draws the robot's body.
     */
    #body() {
        fill(this.#colour);
        // Torso
        square(this.#x, this.#y, 100);
        // Left arm
        rect(this.#x + 65, this.#y - 25, 30, 10);
        circle(this.#x + 85, this.#y - 25, 10);
        rect(this.#x + 85, this.#y + 20, 10, 80);
        circle(this.#x + 85, this.#y + 70, 20);
        // Right arm
        rect(this.#x - 65, this.#y - 25, 30, 10);
        circle(this.#x - 85, this.#y - 25, 10);
        rect(this.#x - 85, this.#y + 20, 10, 80);
        circle(this.#x - 85, this.#y + 70, 20);
    }

    /**
     * Helper method. Draws the robot's legs.
     */
    #legs() {
        fill(this.#colour);
        // Left leg
        rect(this.#x + 20, this.#y + 65, 10, 30);
        circle(this.#x + 20, this.#y + 85, 10);
        rect(this.#x + 20, this.#y + 130, 10, 80);
        arc(this.#x + 20, this.#y + 170, 30, 20, PI, TWO_PI, CHORD);
        // Right leg
        rect(this.#x - 20, this.#y + 65, 10, 30);
        circle(this.#x - 20, this.#y + 85, 10);
        rect(this.#x - 20, this.#y + 130, 10, 80);
        arc(this.#x - 20, this.#y + 170, 30, 20, PI, TWO_PI, CHORD);
    }
}