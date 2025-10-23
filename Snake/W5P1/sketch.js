const GRID_SIZE = 20;

let snakeX = [20];
let snakeY = [260]
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
        drawSnake();
        if (snakeIsOverFood()) {
            addSegment();
            generateFood();
        }
    }
}

/**
 * Draws the snake.
 */
function drawSnake() {
    fill(0, 255, 0);
    for (let i = 0; i < snakeX.length; i++) {
        if (i === 0) {
            fill(255, 0, 0);
        } else {
            fill(0, 255, 0);
        }
        square(snakeX[i], snakeY[i], GRID_SIZE);
    }
}

/**
 * Adds a segment to the end of the snake.
 */
function addSegment() {
    snakeX.push(snakeX[snakeX.length - 1] - GRID_SIZE * xDir);
    snakeY.push(snakeY[snakeY.length - 1] - GRID_SIZE * yDir);
}

/**
 * Calculates and updates the snake's coordinates.
 */
function moveSnake() {
    snakeX.unshift(snakeX[0] + GRID_SIZE * xDir);
    snakeY.unshift(snakeY[0] + GRID_SIZE * yDir);
    snakeX.pop();
    snakeY.pop();
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
    return snakeX[0] === 0 || snakeX[0] === width - GRID_SIZE || snakeY[0] === 0 || snakeY[0] === height - GRID_SIZE;
}

/**
 * Checks if the snake's head is over the food.
 * @returns {boolean}
 */
function snakeIsOverFood() {
    return foodX >= snakeX[0] && foodX <= snakeX[0] + GRID_SIZE && foodY >= snakeY[0] && foodY <= snakeY[0] + GRID_SIZE;
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