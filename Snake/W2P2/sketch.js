const GRID_SIZE = 20;

let headX = 0;
let headY = 260;
let foodX;
let foodY;

function setup() {
    createCanvas(600, 600);
    frameRate(3);
    let numberOfCells = width / GRID_SIZE;
    let randomXCell = floor(random(numberOfCells));
    let randomYCell = floor(random(numberOfCells));
    foodX = randomXCell * GRID_SIZE + GRID_SIZE / 2;
    foodY = randomYCell * GRID_SIZE + GRID_SIZE / 2;
}

function draw() {
    background(0);
    fill(255, 255, 0);
    circle(foodX, foodY, GRID_SIZE);
    fill(0, 255, 0);
    square(headX, headY, GRID_SIZE);
    if (headX < width - GRID_SIZE) {
        headX += GRID_SIZE;
    }
}