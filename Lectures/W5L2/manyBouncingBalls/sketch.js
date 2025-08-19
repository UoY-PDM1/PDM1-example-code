let balls = [{
    x: 50,
    y: 50,
    speedX: 3,
    speedY: 3
}];


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    for (let i = 0; i < balls.length; i++) {
        circle(balls[i].x, balls[i].y, 100);
        if (balls[i].x < 50 || balls[i].x > width - 50) {
            balls[i].speedX *= -1;
        }
        if (balls[i].y < 50 || balls[i].y > height - 50) {
            balls[i].speedY *= -1;
        }
        balls[i].x += balls[i].speedX;
        balls[i].y += balls[i].speedY;
    }
    // for (let ball of balls) {
    //     circle(ball.x, ball.y, 100);
    //     if (ball.x < 50 || ball.x > width - 50) {
    //         ball.speedX *= -1;
    //     }
    //     if (ball.y < 50 || ball.y > height - 50) {
    //         ball.speedY *= -1;
    //     }
    //     ball.x += ball.speedX;
    //     ball.y += ball.speedY;
    // }
}

function mouseClicked() {
    balls.push({
        x: random(50, width - 50),
        y: random(50, height - 50),
        speedX: random(0, 5),
        speedY: random(0, 5)
    })
}