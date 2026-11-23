let mic, fft, amp;

function setup() {
    createCanvas(600, 300);
    rectMode(CENTER);
    fft = new p5.FFT();
    mic = new p5.AudioIn();
    amp = new p5.Amplitude();
    mic.start();
    mic.connect(amp);
    fft.setInput(mic);
}

function draw() {
    background(0);
    stroke(255, 0, 255);
    strokeWeight(5);
    rect(width / 2, height / 2, amp.getLevel() * width, 100);
    let wave = fft.waveform();
    for (let i = 0; i < wave.length; i++) {
        let x = map(i, 0, wave.length, 0, width);
        let y = map(wave[i], -1, 1, 0, height);
        point(x, y);
    }
}
