let ball = {
    x: 50,
    y: 50,
    speedX: 3,
    speedY: 3
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    circle(ball.x, ball.y, 100);
    if (ball.x < 50 || ball.x > width - 50) {
        ball.speedX *= -1;
    }
    if (ball.y < 50 || ball.y > height - 50) {
        ball.speedY *= -1;
    }
    ball.x += ball.speedX;
    ball.y += ball.speedY;
}