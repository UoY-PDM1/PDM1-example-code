let dundundun, fft;

function preload() {
    dundundun = loadSound("assets/153405__copyc4t__dundundunnnextreme.wav");
}

function setup() {
    createCanvas(600, 300);
    fft = new p5.FFT(0.8, 512);
}

function draw() {
    background(0);
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
    dundundun.play();
}
