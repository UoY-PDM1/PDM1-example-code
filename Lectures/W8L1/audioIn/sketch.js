let mic, fft;

function setup() {
    createCanvas(600, 300);
    rectMode(CENTER);
    fft = new p5.FFT(0.8, 512);
    mic = new p5.AudioIn();
    // Delays the start of the microphone until the user interacts
    getAudioContext().suspend();
    mic.start();
    fft.setInput(mic);
}

function draw() {
    background(0);
    rect(width / 2, height / 2, mic.getLevel() * width, 100);
    let spectrum = fft.analyze();
    let x = (width - spectrum.length) / 2;
    for (let bin of spectrum) {
        stroke(bin, 0, bin);
        let fftScaled = (bin / 255) * (height / 2);
        line(x, (height / 2) - fftScaled, x, (height / 2) + fftScaled);
        x++;
    }
}

function mouseClicked() {
    // Confirms that the user has started the audio
    userStartAudio();
}