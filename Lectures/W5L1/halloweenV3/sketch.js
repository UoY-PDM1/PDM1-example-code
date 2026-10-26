const NUM_GHOSTS = 3;

let ghostX = [];
let ghostY = [];
let ghostAlpha = [];
let ghostScale = [];

const MIN_SPIDER_Y = 86;
const MAX_SPIDER_Y = 550;

let spiderX = 730;
let spiderY = MIN_SPIDER_Y;
let spiderSpeed = 2;

function setup() {
    createCanvas(800, 600);
    startScene();
}

function draw() {
    drawRoom();
    drawPumpkin();
    for (let i = 0; i < NUM_GHOSTS; i++) {
        drawGhost(ghostX[i], ghostY[i], ghostScale[i], ghostAlpha[i]);
    }
    drawSpider();
    updateGhosts();
    updateSpider();
}

/**
 * Sets the initial positions and values of the ghosts and spider.
 */
function startScene() {
    createGhosts();
    spiderY = MIN_SPIDER_Y;
}

function keyPressed() {
    startScene();
}

/**
 * Sets the initial values of the global variables controlling the ghosts.
 */
function createGhosts() {
    const MIN_GHOST_X = 200;
    const MAX_GHOST_X = 601;
    const MIN_GHOST_Y = 50;
    const MAX_GHOST_Y = 250;
    const MAX_SCALE = 0.5;
    const MAX_ALPHA = 0.5;

    for (let i = 0; i < NUM_GHOSTS; i++) {
        ghostX[i] = random(MIN_GHOST_X, MAX_GHOST_X);
        ghostY[i] = random(MIN_GHOST_Y, MAX_GHOST_Y);
        ghostScale[i] = random(MAX_SCALE);
        ghostAlpha[i] = random(MAX_ALPHA) * 255;
    }
}

/**
 * Updates the global variables controlling the ghosts.
 */
function updateGhosts() {
    const SCALE_INC = 0.001;

    for (let i = 0; i < NUM_GHOSTS; i++) {
        ghostX[i] += randomMovement();
        ghostY[i] += randomMovement();
        ghostScale[i] += SCALE_INC;
        ghostAlpha[i] = ghostScale[i] * 255;
    }
}

/**
 * Gets a random movement amount.
 * @returns {number} A random number.
 */
function randomMovement() {
    const LEFT = -2;
    const RIGHT = 2;
    return random(LEFT, RIGHT);
}

/**
 * Draws a single ghost.
 * @param {number} x The x coordinate of the ghost
 * @param {number} y The y coordinate of the ghost
 * @param {number} scale The current scale multiplier. A number between 0 and 1.
 * @param {number} alpha The current alpha multiplier. A number between 0 and 1.
 */
function drawGhost(x, y, scale, alpha) {
    // Head and body
    noStroke();
    fill(255, 255, 255, alpha);
    const headWidth = 100 * scale;
    const headHeight = 80 * scale;
    const bodyHeight = 200 * scale;
    const bodyWidth = 160 * scale;
    arc(x, y, headWidth, headHeight, PI, TWO_PI);
    quad(x - headWidth / 2, y, x + headWidth / 2, y, x + bodyWidth / 2, y + bodyHeight, x - bodyWidth / 2, y + bodyHeight);
    // Face
    const eyeWidth = 20 * scale;
    const eyeHeight = 30 * scale;
    const mouthWidth = 30 * scale;
    const mouthHeight = 40 * scale;
    fill(0, 0, 0, alpha);
    ellipse(x - eyeWidth, y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(x + eyeWidth, y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(x, y + mouthHeight, mouthWidth, mouthHeight);
}

/**
 * Draws the room in the background.
 */
function drawRoom() {
    // The room - lines for floor and walls worked out using free online graph paper
    background(120); 
    stroke(60);
    // Floor outline
    line(0, 600, 150, 300);
    line(150, 300, 650, 300);
    line(650, 300, 800, 600);
    // Back corners
    line(150, 0, 150, 300);
    line(650, 0, 650, 300);
    // Vertical floor lines
    line(100, 600, 210, 300);
    line(200, 600, 280, 300);
    line(300, 600, 340, 300);
    line(400, 600, 400, 300);
    line(500, 600, 460, 300);
    line(600, 600, 520, 300);
    line(700, 600, 590, 300);
    // Horizontal floor lines
    line(100, 400, 172, 400);
    line(30, 540, 120, 540);
    line(203, 320, 275, 320);
    line(160, 440, 242, 440);
    line(232, 480, 315, 480);
    line(330, 380, 400, 380);
    line(307, 550, 400, 550);
    line(400, 410, 473, 410);
    line(466, 340, 531, 340);
    line(487, 500, 572, 500);
    line(610, 350, 675, 350);
    line(650, 460, 730, 460);
}

/**
 * Draws the pumpkin.
 */
function drawPumpkin() {
    noStroke();
    fill(245, 153, 15);
    // Lid
    arc(175, 290, 50, 30, PI, TWO_PI);
    arc(225, 290, 75, 40, PI, TWO_PI);
    // Main body
    arc(206, 292, 111, 130, -0.1, PI + 0.1);
    // Eyes
    fill(0);
    arc(180, 320, 10, 40, PI, TWO_PI);
    arc(230, 320, 10, 40, PI, TWO_PI);
    // Mouth
    arc(206, 330, 50, 20, 0, PI);
    // Candle glow in eyes and mouth
    fill(255, 217, 90, 255 * random(0.4, 0.5));
    arc(180, 320, 10, 40, PI, TWO_PI);
    arc(230, 320, 10, 40, PI, TWO_PI);
    arc(206, 330, 50, 20, 0, PI);
    // Teeth
    fill(245, 153, 15);
    rect(196, 330, 5, 7);
    rect(211, 330, 5, 7);
    // stalk
    strokeWeight(10);
    stroke(96, 113, 19);
    noFill();
    arc(170, 275, 50, 50, TWO_PI - QUARTER_PI, TWO_PI); 
    strokeWeight(1);
}

/**
 * Draws the spider.
 */
function drawSpider() {
    // Web
    stroke(0);
    line(580, 0, 660, 120);
    line(660, 120, 800, 150);
    line(660, 120, 760, 0);
    line(645, 0, 692, 80);
    line(692, 80, 800, 100);
    line(720, 0, 740, 20);
    line(740, 20, 800, 40);
    line(80, 0, 660, 120);
    line(660, 120, 720, 600);
    line(spiderX, MIN_SPIDER_Y, spiderX, spiderY);
    // Spider
    fill(0);
    ellipse(spiderX, spiderY, 80, 50);
    noFill();
    arc(spiderX - 50, spiderY - 5, 30, 40, PI + QUARTER_PI, TWO_PI);
    arc(spiderX + 50, spiderY - 5, 30, 40, PI, TWO_PI - QUARTER_PI);
    arc(spiderX - 50, spiderY, 30, 40, PI, TWO_PI);
    arc(spiderX + 50, spiderY, 30, 40, PI, TWO_PI);
    arc(spiderX - 50, spiderY + 5, 30, 40, PI + QUARTER_PI, TWO_PI);
    arc(spiderX + 50, spiderY + 5, 30, 40, PI, TWO_PI - QUARTER_PI);
    arc(spiderX - 50, spiderY + 10, 30, 40, PI, TWO_PI);
    arc(spiderX + 50, spiderY + 10, 30, 40, PI, TWO_PI);
    // Eyes
    fill(255);
    ellipse(spiderX - 10, spiderY, 20, 30);
    ellipse(spiderX + 10, spiderY, 20, 30);
    ellipse(spiderX - 26, spiderY, 12, 20);
    ellipse(spiderX + 26, spiderY, 12, 20);
    fill(0);
    circle(constrain(mouseX, spiderX-15, spiderX-5), constrain(mouseY, spiderY-4, spiderY+4), 5);
    circle(constrain(mouseX, spiderX+5, spiderX+15), constrain(mouseY, spiderY-4, spiderY+4), 5);
    circle(constrain(mouseX, spiderX-29, spiderX-23), constrain(mouseY, spiderY-4, spiderY+4), 5);
    circle(constrain(mouseX, spiderX+23, spiderX+29), constrain(mouseY, spiderY-4, spiderY+4), 5);
}

/**
 * Updates the spider's location.
 */
function updateSpider() {
    if (isOutOfRange(spiderY, MIN_SPIDER_Y, MAX_SPIDER_Y)) {
        if (spiderSpeed > 0) {
            spiderSpeed = -1;
        } else {
            spiderSpeed = 2;
        }
        spiderY += spiderSpeed;
    }
    spiderY += spiderSpeed;
}

/**
 * Tests if a value is outside of an acceptable range.
 * 
 * NOTE: This should look very familiar!
 * @param {number} val The value to check
 * @param {number} minVal The minimum acceptable value
 * @param {number} maxVal The maximum acceptable value
 * @returns {boolean} True if the value is outside the range, false if it is within the range.
 */
function isOutOfRange(val, minVal, maxVal) {
    return val < minVal || val > maxVal;
}
