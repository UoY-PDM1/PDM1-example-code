let fillColour;
let x = 300;
let y = 300;
let distFromCentre = 250;
let move = 5;

function setup() {
    createCanvas(600, 600);
    fillColour = color(random(255), random(255), random(255));
    fill(fillColour);
    noStroke();
}

function draw() {
    background(255);
    triangle(x, y - distFromCentre, x + distFromCentre, y + distFromCentre, x - distFromCentre, y + distFromCentre);
}

function keyPressed() {
    if (keyCode === UP_ARROW || key === "w") {
        if (y > distFromCentre) {
            y -= move;
        }
    }
    else if (keyCode === LEFT_ARROW || key === "a") {
        if (x > distFromCentre) {
            x -= move;
        }
    }
    else if (keyCode === RIGHT_ARROW || key === "d") {
        if (x < width - distFromCentre) {
            x += move;
        }
    }
    else if (keyCode === DOWN_ARROW || key === "s") {
        if (y < height - distFromCentre) {
            y += move;
        }
    }
}

function mouseClicked() {
    fillColour = color(random(255), random(255), random(255));
    fill(fillColour);
}