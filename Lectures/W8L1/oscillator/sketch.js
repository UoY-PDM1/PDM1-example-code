let sineOsc, triOsc, squareOsc, sawOsc, pulse, fft;
let oscSelector;
let currentOscillator = "";

function setup() {
    createCanvas(600, 400);
    oscSelector = createRadio();
    oscSelector.option("Sine");
    oscSelector.option("Triangle");
    oscSelector.option("Square");
    oscSelector.option("Saw");
    oscSelector.option("Pulse");
    oscSelector.option("", "None");

    sineOsc = new p5.SinOsc();
    triOsc = new p5.TriOsc();
    squareOsc = new p5.SqrOsc();
    sawOsc = new p5.SawOsc();
    pulse = new p5.Pulse();

    fft = new p5.FFT();

    stroke(255, 0, 255);
    strokeWeight(5);
}

function draw() {
    background(0);
    radioSelection();
    drawWave();   
}

function mouseMoved() {
    /* If an oscillator is active and the mouse is over the canvas, use the mouse position to set the frequency
    and pan of the oscillator. */
    if (currentOscillator !== "" && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        if (currentOscillator === "Sine") {
            sineOsc.freq(mouseY);
            sineOsc.pan(map(mouseX, 0, width, -1, 1));
        } else if (currentOscillator === "Triangle") {
            triOsc.freq(mouseY);
            triOsc.pan(map(mouseX, 0, width, -1, 1));
        } else if (currentOscillator === "Square") {
            squareOsc.freq(mouseY);
            squareOsc.pan(map(mouseX, 0, width, -1, 1));
        } else if (currentOscillator === "Saw") {
            sawOsc.freq(mouseY);
            sawOsc.pan(map(mouseX, 0, width, -1, 1));
        } else if (currentOscillator === "Pulse") {
            pulse.freq(mouseY);
            pulse.pan(map(mouseX, 0, width, -1, 1));
        }
    }
}

/**
 * Draws the sound wave.
 */
function drawWave() {
    let wave = fft.waveform();
    for (let i = 0; i < wave.length; i++) {
        let x = map(i, 0, wave.length, 0, width);
        let y = map(wave[i], -1, 1, 0, height);
        point(x, y);
    }
}

/**
 * Checks if the radio button selection has changed and 
 * starts an oscillator if appropriate.
 */
function radioSelection() {
    if (oscSelector.value() !== currentOscillator) {
        currentOscillator = oscSelector.value();
        stopAll();
        if (currentOscillator === "Sine") {
            sineOsc.start();
        } else if (currentOscillator === "Triangle") {
            triOsc.start();
        } else if (currentOscillator === "Square") {
            squareOsc.start();
        } else if (currentOscillator === "Saw") {
            sawOsc.start();
        } else if (currentOscillator === "Pulse") {
            pulse.start();
        }
    }
}

/**
 * Stops all oscilators
 */
function stopAll() {
    sineOsc.stop();
    triOsc.stop();
    squareOsc.stop();
    sawOsc.stop();
    pulse.stop();
}