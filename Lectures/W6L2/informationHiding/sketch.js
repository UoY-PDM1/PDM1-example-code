/**
 * A class representing a ball.
 */
class Ball {
    #x;
    #y;
    #speedX;
    #speedY;

    /**
     * Creates a new Ball object
     * @param {number} x The starting x coordinate of the ball
     * @param {number} y The starting y coordinate of the ball
     * @param {number} speedX The speed and direction of the ball on the x axis
     * @param {number} speedY The speed and direction of the ball on the y axis
     */
    constructor(x, y, speedX, speedY) {
        this.#x = x;
        this.#y = y;
        this.#speedX = speedX;
        this.#speedY = speedY;
    }

    /**
     * Draws the ball.
     */
    draw() {
        circle(this.#x, this.#y, 100);
    }

    /**
     * Private. Moves the ball.
     * @param {number} xDirAtEdge How to change speedX when the ball hits an edge
     * @param {number} yDirAtEdge How to change speedY when the ball hits an edge
     */
    #move(xDirAtEdge, yDirAtEdge) {
        if (this.#x < 50 || this.#x > width - 50) {
            this.#speedX *= xDirAtEdge;
        }
        if (this.#y < 50 || this.#y > height - 50) {
            this.#speedY *= yDirAtEdge;
        }
        this.#x += this.#speedX;
        this.#y += this.#speedY;
    }

    bounce() {
        this.#move(-1, -1);
    }

    drop() {
        this.#speedX = 0; // make sure it only moves on the y axis
        if (this.#speedY < 0) {
            this.#speedY *= -1; // make sure it's moving down the y axis
        }
        this.#move(0, 0);
    }
}

// Below is the main sketch

let balls = [];


function setup() {
    createCanvas(600, 400);
    balls.push(new Ball(50, 50, 3, 3))
}

function draw() {
    background(255);
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].drop();
    }

    // for (let ball of balls) {
    //     ball.draw();
    //     ball.move();
    // }
}

function mouseClicked() {
    balls.push(new Ball(mouseX, mouseY, random(-5, 5), random(-5, 5)));
}
