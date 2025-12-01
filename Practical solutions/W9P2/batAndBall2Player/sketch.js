/**
 * There are definitely some occasional bugs in this implementation!
 * It's also very hard to lose...
 * 
 * Summary of changes from 1 player version
 * - replaced the bat global variable with two Bat instances: player and computer
 * - renamed moveBat() to movePlayerBat() to better reflect its purpose
 * - added moveComputerBat() function to move the computer's bat toward the ball
 * 
 * Changes to the Ball class
 * - Added a direction getter
 * - Added a yDirection instance variable
 * - Modified the bounce() method to give the ball a random y direction on bounce (to make the game harder)
 * - Modified the update() method to start a newThrow() if the ball goes out of bounds on the y axis
 * 
 * Changes to the Bat class
 * - Added getters
 * - Added a #playDirection instance variable 
 * - Modified the hit() and miss() methods to account for direction
 * - Added a checkForHit() method and moved the conditionals that were in draw() into this method.
 * 
 * Changes are to the Ball class
 * - Modified the newThrow() method to the ball in the middle of the x axis and picks a direction at random (1 or -1)
 * - Modified the bounce() method to reverse the direction instead of setting it to a specific number
 * - Removed the ballReturned() conditional from the update() method
 */
let ball, player, computer;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    noStroke();
    player = new Bat(30, width / 2, -1);
    computer = new Bat(width - 30, width / 2, 1);
    ball = new Ball(2); // Increase speed for a harder game
}

function draw() {
    background(0);
    if (keyIsPressed) {
        movePlayerBat();
    }
    moveComputerBat();
    player.draw();
    computer.draw();
    ball.draw();
    player.checkForHit(ball);
    computer.checkForHit(ball);
    ball.update();
}

/**
 * Moves the bat if the user has pressed an appropriate key
 */
function movePlayerBat() {
    if (key === "w" || keyCode === UP_ARROW) {
        player.moveUp();
    } else if (key === "s" || keyCode === DOWN_ARROW) {
        player.moveDown();
    }
}

/**
 * Moves the computer's bat. The bat generally moves toward the ball but
 * a little randomness is added to make the computer easier to beat.
 */
function moveComputerBat() {
    let randomAct = random(1);
    const SENSIBLE_MOVE_THRESHOLD = 0.3; // A lower threshold creates a less effective computer player
    if (randomAct < SENSIBLE_MOVE_THRESHOLD) {
        // move towards the ball
        if (ball.getY() < computer.getY() - computer.getHeight() / 2) {
            if (computer.getY() > -computer.getHeight() / 2) {
                computer.moveUp();
            }
        }
        else if (ball.getY() > computer.getY() + computer.getHeight() / 2) {
            if (computer.getY() < height - computer.getHeight() / 2) {
                computer.moveDown();
            }
        }
    }
}

/**
 * Represents the Bat
 */
class Bat {
    #x;
    #y;
    #playDirection;
    #height = 70;
    #width = 30;
    #moveSpeed = 5;
    #growAmount = 5;
    #shrinkAmount = 2;
    #MAX_SIZE = height / 2;

    /**
     * Creates a new Bat
     * @param {number} x The starting x coordinate (CENTER mode)
     * @param {number} y The starting y coordinate (CENTER mode)
     */
    constructor(x, y, playDirection) {
        this.#x = x;
        this.#y = y;
        this.#playDirection = playDirection
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
        let yInRange = ball.getY() >= this.#y - this.#height / 2 && ball.getY() <= this.#y + this.#height / 2;
        let ballTowardsBat = this.#playDirection === ball.getDirection();
        if (yInRange && ballTowardsBat) {
            if (this.#playDirection === -1) {
                return ball.getX() - ball.getSize() / 2 <= this.#x + this.#width / 2;
            }
            else {
                return ball.getX() + ball.getSize() / 2 >= this.#x - this.#width / 2;
            }
        }
    }

    /**
     * Checks if this Bat has missed the given Ball.
     * @param {Ball} ball An instance of Ball
     * @returns {boolean} True if this bat has missed the ball, false otherwise.
     */
    missed(ball) {
        if (this.#playDirection === -1) {
            return ball.getX() <= -ball.getSize() / 2;
        } else {
            return ball.getX() >= width + ball.getSize() / 2;
        }
    }

    /**
     * Checks if the bat has hit or missed the ball. The bat and 
     * ball are updated if either event has occurred.
     * @param {Ball} ball The ball in play.
     */
    checkForHit(ball) {
        if (this.hit(ball)) {
            ball.bounce();
            this.grow();
        } else if (this.missed(ball)) {
            this.shrink();
            ball.increaseSpeed();
            ball.newThrow();
        }
    }

    /**
     * Increases the height of the bat
     */
    grow() {
        if (this.#height < this.#MAX_SIZE) {
            this.#height += this.#growAmount;
        }
    }

    /**
     * Decreases the height of the bat
     */
    shrink() {
        if (this.#height >= this.#shrinkAmount) {
            this.#height -= this.#shrinkAmount;
        }
    }

    /**
     * Gets the y coordinate of the Bat.
     * @returns {number} The y coordinate
     */
    getY() {
        return this.#y;
    }

    /**
     * Gets the height of the Bat.
     * @returns {number} The height
     */
    getHeight() {
        return this.#height;
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
    #xDirection = -1;
    #yDirection = 0;
    #MAX_SPEED = 15;

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
        this.#x = width / 2;
        let randomDir = random(-1, 1);
        if (randomDir < 0) {
            this.#xDirection = -1;
        } else {
            this.#xDirection = 1;
        }
        this.#y = random(this.#size / 2, height - this.#size / 2);
        this.#yDirection = 0;
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
        this.#x += this.#speed * this.#xDirection;
        this.#y += this.#yDirection;
        if (this.#y + this.#size / 2 < 0 || this.#y - this.#size / 2 > height) {
            this.newThrow();
        }
    }

    /**
     * Bounces the ball back toward the right edge
     */
    bounce() {
        this.#xDirection *= -1;
        this.#yDirection = random(-3, 3);
    }

    /**
     * Increases the ball's speed up to a maximum of 10
     */
    increaseSpeed() {
        if (this.#speed < this.#MAX_SPEED) {
            this.#speed++;
        }
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

    getDirection() {
        return this.#xDirection;
    }
}