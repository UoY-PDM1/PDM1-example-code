function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(255);
    let x = 50;
    while (x <= 150) {
        line(x, 60, x, 80);
        x += 10;
    }
}