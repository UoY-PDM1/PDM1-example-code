let ghost1X, ghost1Y, ghost1Alpha, ghost1Scale;
let ghost2X, ghost2Y, ghost2Alpha, ghost2Scale;
let ghost3X, ghost3Y, ghost3Alpha, ghost3Scale;

const MIN_SPIDER_Y = 86;
const MAX_SPIDER_Y = 550;

let spiderX = 730;
let spiderY = MIN_SPIDER_Y;
let spiderSpeed = 2;

function setup() {
    createCanvas(800, 600);
    
    // Initial values for ghost 1
    ghost1X = random(200, 601);
    ghost1Y = random(50, 250);
    ghost1Scale = random(0.5);
    ghost1Alpha = random(0.5) * 255;

    // Initial values for ghost 2
    ghost2X = random(200, 601);
    ghost2Y = random(50, 250);
    ghost2Scale = random(0.5);
    ghost2Alpha = random(0.5) * 255;

    // Initial values for ghost 3
    ghost3X = random(200, 601);
    ghost3Y = random(50, 250);
    ghost3Scale = random(0.5);
    ghost3Alpha = random(0.5) * 255;
}

function draw() {
    // THE ROOM
    // lines for floor and walls worked out using free online graph paper
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

    // THE PUMPKIN
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

    // GHOST 1
    // Head and body
    noStroke();
    fill(255, 255, 255, ghost1Alpha);
    let headWidth = 100 * ghost1Scale;
    let headHeight = 80 * ghost1Scale;
    let bodyHeight = 200 * ghost1Scale;
    let bodyWidth = 160 * ghost1Scale;
    arc(ghost1X, ghost1Y, headWidth, headHeight, PI, TWO_PI);
    quad(ghost1X - headWidth / 2, ghost1Y, ghost1X + headWidth / 2, ghost1Y, ghost1X + bodyWidth / 2, ghost1Y + bodyHeight, ghost1X - bodyWidth / 2, ghost1Y + bodyHeight);
    // Face
    let eyeWidth = 20 * ghost1Scale;
    let eyeHeight = 30 * ghost1Scale;
    let mouthWidth = 30 * ghost1Scale;
    let mouthHeight = 40 * ghost1Scale;
    fill(0, 0, 0, ghost1Alpha);
    ellipse(ghost1X - eyeWidth, ghost1Y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(ghost1X + eyeWidth, ghost1Y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(ghost1X, ghost1Y + mouthHeight, mouthWidth, mouthHeight);
    
    // Update ghost 1
    ghost1X += random(-2, 2);
    ghost1Y += random(-2, 2);
    ghost1Scale += 0.001;
    ghost1Alpha = ghost1Scale * 255;

    // GHOST 2
    fill(255, 255, 255, ghost2Alpha);
    headWidth = 100 * ghost2Scale;
    headHeight = 80 * ghost2Scale;
    bodyHeight = 200 * ghost2Scale;
    bodyWidth = 160 * ghost2Scale;
    arc(ghost2X, ghost2Y, headWidth, headHeight, PI, TWO_PI);
    quad(ghost2X - headWidth / 2, ghost2Y, ghost2X + headWidth / 2, ghost2Y, ghost2X + bodyWidth / 2, ghost2Y + bodyHeight, ghost2X - bodyWidth / 2, ghost2Y + bodyHeight);
    // Face
    eyeWidth = 20 * ghost2Scale;
    eyeHeight = 30 * ghost2Scale;
    mouthWidth = 30 * ghost2Scale;
    mouthHeight = 40 * ghost2Scale;
    fill(0, 0, 0, ghost2Alpha);
    ellipse(ghost2X - eyeWidth, ghost2Y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(ghost2X + eyeWidth, ghost2Y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(ghost2X, ghost2Y + mouthHeight, mouthWidth, mouthHeight);

    // Update ghost 2
    ghost2X += random(-2, 2);
    ghost2Y += random(-2, 2);
    ghost2Scale += 0.001;
    ghost2Alpha = ghost2Scale * 255;

    // GHOST 3
    fill(255, 255, 255, ghost3Alpha);
    headWidth = 100 * ghost3Scale;
    headHeight = 80 * ghost3Scale;
    bodyHeight = 200 * ghost3Scale;
    bodyWidth = 160 * ghost3Scale;
    arc(ghost3X, ghost3Y, headWidth, headHeight, PI, TWO_PI);
    quad(ghost3X - headWidth / 2, ghost3Y, ghost3X + headWidth / 2, ghost3Y, ghost3X + bodyWidth / 2, ghost3Y + bodyHeight, ghost3X - bodyWidth / 2, ghost3Y + bodyHeight);
    // Face
    eyeWidth = 20 * ghost3Scale;
    eyeHeight = 30 * ghost3Scale;
    mouthWidth = 30 * ghost3Scale;
    mouthHeight = 40 * ghost3Scale;
    fill(0, 0, 0, ghost3Alpha);
    ellipse(ghost3X - eyeWidth, ghost3Y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(ghost3X + eyeWidth, ghost3Y - eyeHeight / 4, eyeWidth, eyeHeight);
    ellipse(ghost3X, ghost3Y + mouthHeight, mouthWidth, mouthHeight);

    // Update ghost 3
    ghost3X += random(-2, 2);
    ghost3Y += random(-2, 2);
    ghost3Scale += 0.001;
    ghost3Alpha = ghost3Scale * 255;

    // SPIDER
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
    
    // Update spider
    if (spiderY < MIN_SPIDER_Y || spiderY > MAX_SPIDER_Y) {
        if (spiderSpeed > 0) {
            spiderSpeed = -1;
        } else {
            spiderSpeed = 2;
        }
        spiderY += spiderSpeed;
    }
    spiderY += spiderSpeed;
}

function keyPressed() {
    // Reset to initial values for ghost 1
    ghost1X = random(200, 601);
    ghost1Y = random(50, 250);
    ghost1Scale = random(0.5);
    ghost1Alpha = random(0.5) * 255;

    // Reset to initial values for ghost 2
    ghost2X = random(200, 601);
    ghost2Y = random(50, 250);
    ghost2Scale = random(0.5);
    ghost2Alpha = random(0.5) * 255;

    // Reset to initial values for ghost 3
    ghost3X = random(200, 601);
    ghost3Y = random(50, 250);
    ghost3Scale = random(0.5);
    ghost3Alpha = random(0.5) * 255;

    // Reset the spider
    spiderY = MIN_SPIDER_Y;
}
