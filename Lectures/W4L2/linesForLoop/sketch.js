function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(255);
    for (let x = 50; x <= 150; x+=10) {
        line(x, 60, x, 80);
    }
}