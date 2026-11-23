let shore;
let audioPlaying = false;

async function setup() {
    createCanvas(300, 300);
    shore = await createAudio("assets/53428__digifishmusic__close-mic-shore.wav");
}

function mouseClicked() {
    if (!audioPlaying) {
        shore.loop();
        audioPlaying = true;
    } else {
        shore.pause();
        audioPlaying = false;
    }

    background(random(255), random(255), random(255));
}

function keyPressed() {
    if (key === UP_ARROW && shore.volume() < 1) {
        shore.volume(shore.volume() + 0.1);
    } else if (key === DOWN_ARROW && shore.volume() > 0) {
        shore.volume(shore.volume() - 0.1);
    } else if (key === LEFT_ARROW && shore.speed() > 0) {
        shore.speed(shore.speed() - 0.1);
    } else if (key === RIGHT_ARROW && shore.speed() < 3) {
        shore.speed(shore.speed() + 0.1);
    }
    console.log("new volume", shore.volume(), ", new speed", shore.speed());
}