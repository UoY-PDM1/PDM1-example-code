let sky, planeImg;
let nearPlane = -100;
let farPlane = -200;

function preload() {
    sky = loadImage("assets/blue-sky.jpg");
    planeImg = loadImage("assets/plane.png");
}

function setup() {
    createCanvas(sky.width, sky.height);
}

function draw() {
    image(sky, 0, 0);
    image(planeImg, farPlane, 300, planeImg.width / 4, planeImg.height / 4);
    image(planeImg, nearPlane, 200, planeImg.width / 2, planeImg.height / 2);
    if (nearPlane < width + 100) {
        nearPlane += 2;
    } else {
        nearPlane = -100;
    }
    if (farPlane < width) {
        farPlane++;
    } else {
        farPlane = -200;
    }
}
