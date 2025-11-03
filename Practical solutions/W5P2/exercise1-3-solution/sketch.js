let player = {
    x: 50,
    y: 50,
    size: 50
};

let obstacle = {
    x: 150,
    y: 100,
    width: 100,
    height: 200
}

function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {
    background(255);
    fill(0);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    fill(0, 255, 0);
    square(player.x, player.y, player.size);
    if (keyIsPressed) {
        processMove();
    }
}

/**
 * Moves the player if a wasd has been pressed and the block can move
 */
function processMove() {
    if (key === "d" && canMove(1, 0)) {
        player.x++;
    }
    else if (key === "a" && canMove(-1, 0)) {
        player.x--;
    }
    else if (key === "w" && canMove(0, -1)) {
        player.y--;
    }
    else if (key === "s" && canMove(0, 1)) {
        player.y++;
    }
}

/**
 * Checks if the player can move in the selected direction
 * @param {number} xDir -1 to move left, 1 to move right, 0 otherwise
 * @param {number} yDir -1 to move up, 1 to move down, 0 otherwise 
 * @returns {boolean} True if the block can move in the selected direction
 */
function canMove(xDir, yDir) {
    let newX = player.x + xDir;
    let newY = player.y + yDir;
    return newX + player.size <= obstacle.x || newX >= obstacle.x + obstacle.width
        || newY + player.size <= obstacle.y || newY >= obstacle.y + obstacle.height;
}