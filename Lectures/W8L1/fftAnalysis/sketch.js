let dundundun, fft;
    

async function setup() {
    dundundun = await loadSound("assets/153405__copyc4t__dundundunnnextreme.wav");
    createCanvas(600, 300);
    fft = new p5.FFT();
    fft.setInput(dundundun);
}

function draw() {
    background(0);
    stroke(255, 0, 255);
    strokeWeight(5);
    let wave = fft.waveform();
    for (let i = 0; i < wave.length; i++) {
        let x = map(i, 0, wave.length, 0, width);
        let y = map(wave[i], -1, 1, 0, height);
        point(x, y);
    }
}

function mouseClicked() {
    dundundun.play();

}
