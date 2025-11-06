const GRID_SIZE = 20;

let snake = {
    segments: [{
        x: 20,
        y: 260
    }],
    direction: {
        x: 1,
        y: 0
    }
}

let food = {
    x: 0,
    y: 0
}

let font;

function preload() {
    font = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(600, 600);
    frameRate(3);
    startNewGame();
}

function draw() {
    background(0);
    if (isGameOver()) {
        textAlign(CENTER, CENTER);
        textFont(font);
        textSize(48);
        text("GAME OVER", width / 2, height / 2 - 30);
        textSize(14);
        text("Press SPACE to try again", width / 2, height / 2 + 30);
    }
    else {
        drawFood();
        move();
        drawSnake();
        if (snakeIsOverFood()) {
            addSegment();
            generateFood();
        }
    }
}

/**
 * Starts a new game.
 */
function startNewGame() {
    snake = {
        segments: [{
            x: 20,
            y: 260
        }],
        direction: {
            x: 1,
            y: 0
        }
    }
    generateFood();
}

/**
 * Draws the food
 */
function drawFood() {
    fill(255, 255, 0);
    circle(food.x, food.y, GRID_SIZE);
}

/**
 * Draws the snake.
 */
function drawSnake() {
    fill(0, 255, 0);
    for (let i = 0; i < snake.segments.length; i++) {
        square(snake.segments[i].x, snake.segments[i].y, GRID_SIZE);
    }
}

/**
 * Adds a segment to the end of the snake.
 */
function addSegment() {
    snake.segments.push({
        x: snake.segments[snake.segments.length - 1].x - GRID_SIZE * snake.direction.x,
        y: snake.segments[snake.segments.length - 1].y - GRID_SIZE * snake.direction.y
    });
}

/**
 * Calculates and updates the snake's coordinates.
 */
function move() {
    snake.segments.unshift({
        x: snake.segments[0].x + GRID_SIZE * snake.direction.x,
        y: snake.segments[0].y + GRID_SIZE * snake.direction.y
    })
    snake.segments.pop();
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
    return snake.segments[0].x === 0 || snake.segments[0].x === width - GRID_SIZE || snake.segments[0].y === 0 || snake.segments[0].y === height - GRID_SIZE;
}

/**
 * Checks if the snake's head is over the food.
 * @returns {boolean}
 */
function snakeIsOverFood() {
    return food.x >= snake.segments[0].x && food.x <= snake.segments[0].x + GRID_SIZE && food.y >= snake.segments[0].y && food.y <= snake.segments[0].y + GRID_SIZE;
}

/**
 * Generates new coordinates for the food.
 */
function generateFood() {
    food.x = randomCoordinate();
    food.y = randomCoordinate();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.direction.x = -1;
        snake.direction.y = 0;
    }
    else if (keyCode === RIGHT_ARROW) {
        snake.direction.x = 1;
        snake.direction.y = 0;
    }
    else if (keyCode === UP_ARROW) {
        snake.direction.x = 0;
        snake.direction.y = -1;
    }
    else if (keyCode === DOWN_ARROW) {
        snake.direction.x = 0;
        snake.direction.y = 1;
    } else if (key === " " && isGameOver()) {
        startNewGame();
    }
}