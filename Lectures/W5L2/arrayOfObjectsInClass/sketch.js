let allBalls = [];

function setup() {
    createCanvas(600, 400);
    createNewBall(50, 50);
}

function draw() {
    background(255);

    for (let i = 0; i < allBalls.length; i++) {
        circle(allBalls[i].x, allBalls[i].y, 100);
        if (allBalls[i].x < 50 || allBalls[i].x > width - 50) {
            allBalls[i].speedX *= -1;
        }
        allBalls[i].x += allBalls[i].speedX;

        if (allBalls[i].y < 50 || allBalls[i].y > height - 50) {
            allBalls[i].speedY *= -1;
        }
        allBalls[i].y += allBalls[i].speedY;
    }
}

function createNewBall(newX, newY) {
    let ball = {
        x: newX,
        y: newY,
        speedX: 3,
        speedY: 3
    }
    allBalls.push(ball);
}

function mouseClicked() {
    createNewBall(mouseX, mouseY);
}
