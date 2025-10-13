const GRID_SIZE = 20;

let headX = 20;
let headY = 260;
let xDir = 1;
let yDir = 0;
let foodX;
let foodY;

function setup() {
    createCanvas(600, 600);
    frameRate(3);
    foodX = newFoodCoordinate();
    foodY = newFoodCoordinate();
}

function draw() {
    background(0);
    fill(255, 255, 0);
    circle(foodX, foodY, GRID_SIZE);
    if (!isGameOver()) {
        headX += GRID_SIZE * xDir;
        headY += GRID_SIZE * yDir;
        fill(0, 255, 0);
        square(headX, headY, GRID_SIZE);
    }
}

function newFoodCoordinate() {
    let numberOfCells = (width - GRID_SIZE * 2) / GRID_SIZE;
    let gridCell = floor(random(numberOfCells));
    return gridCell * GRID_SIZE + GRID_SIZE / 2;
}

function isGameOver() {
    return headX === 0 || headX === width - GRID_SIZE || headY === 0 || headY === height - GRID_SIZE;
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