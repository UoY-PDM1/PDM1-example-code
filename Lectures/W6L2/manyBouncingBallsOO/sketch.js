/**
 * A class representing a ball.
 */
class Ball {
    x;
    y;
    speedX;
    speedY;

    /**
     * Creates a new Ball object
     * @param {number} x The starting x coordinate of the ball
     * @param {number} y The starting y coordinate of the ball
     * @param {number} speedX The speed and direction of the ball on the x axis
     * @param {number} speedY The speed and direction of the ball on the y axis
     */
    constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    /**
     * Draws the ball.
     */
    draw() {
        circle(this.x, this.y, 100);
    }

    /**
     * Moves the ball.
     */
    move() {
        if (this.x < 50 || this.x > width - 50) {
            this.speedX *= -1;
        }
        if (this.y < 50 || this.y > height - 50) {
            this.speedY *= -1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

let balls = [new Ball(50, 50, 3, 3)];


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    for (let ball of balls) {
        ball.draw();
        ball.move();
    }
}

function mouseClicked() {
    balls.push(new Ball(mouseX, mouseY, random(-5, 5), random(-5, 5)));
}



