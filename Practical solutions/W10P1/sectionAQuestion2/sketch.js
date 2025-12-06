let ellipseX, ellipseY, ellipseW, ellipseH;
let speedX, speedY;
let bounces = 0;

function setup() {
    createCanvas(800, 600);
    ellipseW = random(20, 200);
    ellipseH = random(20, 200);
    ellipseX = random(ellipseW / 2, width - ellipseW / 2);
    ellipseY = random(ellipseH / 2, height - ellipseH / 2);
    speedX = getRandomVelocity(1, 5);
    speedY = getRandomVelocity(1, 5);

    stroke(0, 0, 255);
    fill(0, 0, 150);
}

function draw() {
    background(0);
  
    ellipse(ellipseX, ellipseY, ellipseW, ellipseH);

    updateLocation();
    if (keyIsPressed) {
        updateSize();
    }

    textSize(24);
    textAlign(CENTER);
    text("Bounces: " + bounces, width / 2, 30);
}

function keyPressed() {
    if (key === "x") {
        speedX *= -1; 
    } 
    else if (key === "y") {
        speedY *= -1;
    }
}

/**
 * Updates the size of the ellipse depending on the user's keypress.
 */
function updateSize() {
    if (keyCode === UP_ARROW) {
        ellipseH++;
    }
    else if (keyCode === DOWN_ARROW) {
        ellipseH--;
    }
    else if (keyCode === LEFT_ARROW) {
        ellipseW--;
    }
    else if (keyCode === RIGHT_ARROW) {
        ellipseW++;
    }
}

/**
 * Updates the location of the ellipse, keeping it on screen at all times.
 */
function updateLocation() {
    ellipseX += speedX;
    ellipseY += speedY;
    if (ellipseX >= width - ellipseW / 2 || ellipseX <= ellipseW / 2) {
        ellipseX = constrain(ellipseX, ellipseW / 2, width - ellipseW / 2);
        speedX *= -1;
        bounces++;
    }
    if (ellipseY >= height - ellipseH / 2 || ellipseY <= ellipseH / 2) {
        ellipseY = constrain(ellipseY, ellipseH / 2, height - ellipseH / 2);
        speedY *= -1;
        bounces++;
    }
}

/**
 * Gets a random speed between the minimum and maximum values 
 * and chooses a random direction (either -1 or 1).
 * @param {number} min The minimum speeed (positive)
 * @param {number} max The maximum speed (positive)
 * @returns {number} A random velocity
 */
function getRandomVelocity(min, max) {
    let speed = random(min, max);
    let direction = random(-1, 1);
    if (direction < 0) {
        return speed * -1;
    } else {
        return speed;
    }
}