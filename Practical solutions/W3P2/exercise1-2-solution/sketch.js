function setup() {
    createCanvas(600, 600);
}

function draw() {
    
}

function mouseClicked() {
    drawTriangle();
}

function drawTriangle() {
    fill(random(255), random(255), random(255));
    triangle(mouseX, mouseY, random(width), random(height), random(width), random(height));
}
