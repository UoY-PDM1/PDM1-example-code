let clicks = 0;
let startX, startY, endX, endY;

function setup() {
    createCanvas(600, 600);
    strokeWeight(5);
}

function draw() {
    background(255);
    if (clicks % 2 === 1) {
        line(startX, startY, mouseX, mouseY);
    } else if (clicks > 0 && clicks % 2 === 0) {
        line(startX, startY, endX, endY);
    }
}

function mouseClicked() {
    if (clicks % 2 === 0) {
        startX = mouseX; 
        startY = mouseY;
        console.log("added start x and y:", startX, ",", startY);
    } else {
        endX = mouseX;
        endY = mouseY;
        console.log("added end x and y:", endX, ",", endY);
    }
    clicks++;
}