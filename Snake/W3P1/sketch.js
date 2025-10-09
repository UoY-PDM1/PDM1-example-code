const GRID_SIZE = 20;

let headX = 0;
let headY = 260;
let xDir = 1;
let yDir = 0;
let foodX;
let foodY;

let gameOver = false;

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
    if (!gameOver) {
        headX += GRID_SIZE * xDir;
        headY += GRID_SIZE * yDir;
        background(0);
        fill(255, 255, 0);
        circle(foodX, foodY, GRID_SIZE);
        fill(0, 255, 0);
        square(headX, headY, GRID_SIZE);
    }
    if (headX === 0 || headX === width - GRID_SIZE
        || headY === 0 || headY === height - GRID_SIZE) {
        gameOver = true;
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        xDir = -1;
        yDir = 0;
    }
    else if (keyCode === RIGHT_ARROW) {
        xDir = 1;
        yDir = 0;
    }
    else if (keyCode === UP_ARROW) {
        xDir = 0;
        yDir = -1;
    }
    else if (keyCode === DOWN_ARROW) {
        xDir = 0;
        yDir = 1;
    }
}