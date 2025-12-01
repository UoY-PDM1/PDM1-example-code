let ball, bat;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    noStroke();
    bat = new Bat(30, width / 2);
    ball = new Ball(5);
}

function draw() {
    background(0);
    if (keyIsPressed) {
        moveBat();
    }
    bat.draw();
    ball.draw();
    if (bat.hit(ball)) {
        bat.grow();
        ball.bounce();
    } else if (bat.missed(ball)) {
        bat.shrink();
        ball.increaseSpeed();
        ball.newThrow();
    }
    ball.update();
}

/**
 * Moves the bat if the user has pressed an appropriate key
 */
function moveBat() {
    if (key === "w" || keyCode === UP_ARROW) {
        bat.moveUp();
    } else if (key === "s" || keyCode === DOWN_ARROW) {
        bat.moveDown();
    }
}

/**
 * Represents the Bat
 */
class Bat {
    #x;
    #y;
    #height = 70;
    #width = 30;
    #moveSpeed = 5;
    #growAmount = 5;
    #shrinkAmount = 2;

    /**
     * Creates a new Bat
     * @param {number} x The starting x coordinate (CENTER mode)
     * @param {number} y The starting y coordinate (CENTER mode)
     */
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    draw() {
        fill(255);
        rect(this.#x, this.#y, this.#width, this.#height);
    }

    /**
     * Moves the bat up.
     */
    moveUp() {
        this.#y -= this.#moveSpeed;
    }

    /**
     * Moves the bat down.
     */
    moveDown() {
        this.#y += this.#moveSpeed;
    }

    /**
     * Checks if this Bat has hit the given Ball.
     * @param {Ball} ball An instance of Ball
     * @returns {boolean} True if this bat has hit the ball, false otherwise.
     */
    hit(ball) {
        return ball.getX() - ball.getSize() / 2 <= this.#x + this.#width / 2 && ball.getY() >= this.#y - this.#height / 2 &&
                ball.getY() <= this.#y + this.#height / 2;
    }

    /**
     * Checks if this Bat has missed the given Ball.
     * @param {Ball} ball An instance of Ball
     * @returns {boolean} True if this bat has missed the ball, false otherwise.
     */
    missed(ball) {
        return ball.getX() <= -ball.getSize() / 2;
    }

    /**
     * Increases the height of the bat
     */
    grow() {
        this.#height += this.#growAmount;
    }

    /**
     * Decreases the height of the bat
     */
    shrink() {
        if (this.#height >= this.#shrinkAmount) {
            this.#height -= this.#shrinkAmount;
        }
    }
}

/**
 * Represents a ball.
 */
class Ball {
    #x;
    #y;
    #speed;
    #size = 30;
    #direction = -1;

    /**
     * Creates a new Ball
     * @param {number} speed The starting speed of the ball
     */
    constructor(speed) {
        this.#speed = speed;
        this.newThrow();
    }

    /**
     * Sets the ball to its starting position just off the right edge at 
     * a random y location, moving left.
     */
    newThrow() {
        this.#x = width + this.#size / 2;
        this.#direction = -1;
        this.#y = random(this.#size / 2, height - this.#size / 2);
    }

    /**
     * Draws the ball
     */
    draw() {
        fill(255, 255, 0);
        circle(this.#x, this.#y, this.#size);
    }

    /**
     * Updates the ball's position
     */
    update() {
        this.#x += this.#speed * this.#direction;
        if (this.#hasReturned()) {
            this.newThrow();
        }
    }

    /**
     * Checks if the ball has returned to the right side of the canvas.
     * @returns {boolean} True if the ball has returned to the right side of the screen after a bounce, false otherwise.
     */
    #hasReturned() {
        return this.#direction === 1 && this.#x >= width + this.#size / 2;
    }

    /**
     * Bounces the ball back toward the right edge
     */
    bounce() {
        this.#direction = 1;
    }

    /**
     * Increases the ball's speed
     */
    increaseSpeed() {
        this.#speed++;
    }

    /**
     * Gets the x coordinate of the ball
     * @returns {number} The x coordinate
     */
    getX() {
        return this.#x;
    }

    /**
     * Gets the y coordinate of the ball
     * @returns {number} The y coordinate
     */
    getY() {
        return this.#y;
    }

    /**
     * Gets the size of the ball
     * @returns {number} The size of the ball
     */
    getSize() {
        return this.#size;
    }
}