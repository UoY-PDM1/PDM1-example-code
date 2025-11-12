/**
 * A class representing a ball.
 */
class Ball {
    x;
    y;
    speedX;
    speedY;
    col;

    /**
     * Creates a new Ball object
     * @param {number} x The starting x coordinate of the ball
     * @param {number} y The starting y coordinate of the ball
     * @param {number} speedX The speed and direction of the ball on the x axis
     * @param {number} speedY The speed and direction of the ball on the y axis
     * @param {color} colour The colour of the ball
     */
    constructor(x, y, speedX, speedY, colour) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.col = colour;
    }

    /**
     * Draws the ball.
     */
    draw() {
        fill(this.col);
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

let balls = [];


function setup() {
    createCanvas(600, 400);
    balls.push(new Ball(50, 50, 3, 3, color(0)))
}

function draw() {
    background(255);
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
    }

    // for (let ball of balls) {
    //     ball.draw();
    //     ball.move();
    // }
}

function mouseClicked() {
    balls.push(new Ball(mouseX, mouseY, random(-5, 5), random(-5, 5), color(random(255), random(255), random(255))));
}
