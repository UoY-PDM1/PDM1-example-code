let day, night;

function preload() {
    day = loadImage("assets/blue-sky.jpg");
    night = loadImage("assets/night-sky.jpg");
}

function setup() {
    createCanvas(day.width, day.height);
}

function draw() {
    image(night, 0, 0)
    image(day, 0, 0);
    if (frameCount <= 255) {
        day.loadPixels();
        for (let i = 3; i < width * height * 4; i+= 4) {
            day.pixels[i]--;
        }
        day.updatePixels();
    }
}
