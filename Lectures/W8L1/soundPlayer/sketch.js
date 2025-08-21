let shore;

function preload() {
    shore = loadSound("assets/53428__digifishmusic__close-mic-shore.wav");
}

function setup() {
    createCanvas(300, 300);
}

function mouseClicked() {
    if (!shore.isPlaying()) {
        shore.loop();
    } else {
        shore.pause();
    }
}