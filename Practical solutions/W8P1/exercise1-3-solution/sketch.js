let notes = [];
const NUM_NOTES = 5;

function setup() {
    createCanvas(600, 400);
    rectMode(CENTER);
    for (let i = 0; i < NUM_NOTES; i++) {
        notes.push(new Note());
    }
}

function draw() {
    background(255);
    
    for (const n of notes) {
        n.draw();
    }
}

function mousePressed() {
    for (const n of notes) {
        n.play();
    }
}

/**
 * Represents a note and its UI control
 */
class Note {
    #x;
    #y;
    #freq;
    #osc;
    #fft;

    /**
     * Creates a new Note at a random location and with a random frequency
     */
    constructor() {
        this.#x = random(50, width - 50);
        this.#y = random(50, height - 50);
        this.#freq = random(50, 1000);
        this.#osc = new p5.SinOsc();
        this.#osc.freq(this.#freq);
        this.#osc.pan(map(this.#x, 0, width, -1, 1));
        this.#fft = new p5.FFT();
        this.#fft.setInput(this.#osc);
    }

    /**
     * Draws the note.
     */
    draw() {
        noStroke();
        fill(0, 0, (this.#freq / 1000) * 255);
        square(this.#x, this.#y, 100);
        strokeWeight(3);
        stroke(255, 0, 255); 
        let wave = this.#fft.waveform();
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, this.#x - 50, this.#x + 50);
            let y = map(wave[i], -1, 1, this.#y - 50, this.#y + 50);
            point(x, y);
        }
    }

    /**
     * Play the note if the mouse is over it
     */
    play() {
        if (mouseX >= this.#x - 50 && mouseX <= this.#x + 50
            && mouseY >= this.#y - 50 && mouseY <= this.#y + 50) {
            this.#osc.start();
        } else {
            this.#osc.stop();
        }
    }
}