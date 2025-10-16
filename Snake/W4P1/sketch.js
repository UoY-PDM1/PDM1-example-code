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
    generateFood();
}

function draw() {
    background(0);
    fill(255, 255, 0);
    circle(foodX, foodY, GRID_SIZE);
    if (!isGameOver()) {
        moveSnake();
        fill(0, 255, 0);
        square(headX, headY, GRID_SIZE);
        if (snakeIsOverFood()) {
            generateFood();
        }
    }
}

/**
 * Calculates and updates the snake's coordinates.
 */
function moveSnake() {
    headX += GRID_SIZE * xDir;
    headY += GRID_SIZE * yDir;
}

/**
 * Generates a new random coordinate.
 * @returns {number}
 */
function randomCoordinate() {
    let margin = GRID_SIZE * 2;
    let gridCell = floor(random((width - margin) / GRID_SIZE))
    return gridCell * GRID_SIZE + GRID_SIZE * 1.5;
}

/**
 * Checks if the game is over because the snake has hit a wall.
 * @returns {boolean}
 */
function isGameOver() {
    return headX === 0 || headX === width - GRID_SIZE || headY === 0 || headY === height - GRID_SIZE;
}

/**
 * Checks if the snake's head is over the food.
 * @returns {boolean}
 */
function snakeIsOverFood() {
    return foodX >= headX && foodX <= headX + GRID_SIZE && foodY >= headY && foodY <= headY + GRID_SIZE;
}

/**
 * Generates new coordinates for the food.
 */
function generateFood() {
    foodX = randomCoordinate();
    foodY = randomCoordinate();
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