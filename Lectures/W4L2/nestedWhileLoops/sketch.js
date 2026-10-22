function setup() {
    createCanvas(200, 200);
}

function draw() {
    let x = 0;
    while (x < width) {
        let y = 0;
        while (y < height) {
            stroke(random(255), random(255), random(255));
            point(x, y);
            y++;
        }
        x++;
    }
}