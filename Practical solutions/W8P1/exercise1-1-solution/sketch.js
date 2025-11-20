let sounds = [];
let fft;

function preload() {
    sounds[0] = loadSound("assets/412016__skymary__cat-purring-and-meow.wav");
    sounds[1] = loadSound("assets/529605__chalicewell__katzenmix.wav");
    sounds[2] = loadSound("assets/196255__lolamadeus__snoring-cat.wav");

    fft = new p5.FFT();
}

function setup() {
    createCanvas(600, 400);
    strokeWeight(5);
}

function draw() {
    background(0);
    let wave = fft.waveform();
    for (let i = 0; i < wave.length; i++) {
        let x = map(i, 0, wave.length, 0, width);
        let y = map(wave[i], -1, 1, 0, height);
        point(x, y);
    }
}

function keyPressed() {
    stopAll();
    if (key === "1") {
        stroke(255, 0, 255);
        sounds[0].play();
    } else if (key === "2") {
        stroke(255, 255, 0);
        sounds[1].play();
    } else if (key === "3") {
        stroke(0, 255, 255);
        sounds[2].play();
    }
}

/**
 * Stop all currently playing sounds
 */
function stopAll() {
    if (key === "1" || key === "2" || key === "3") {
        for (const sound of sounds) {
            if (sound.isPlaying()) {
                sound.stop();
            }
        }
    }
}