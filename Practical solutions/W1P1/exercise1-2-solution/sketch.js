const DIAMETER = 40; // Sets the size of the circle. This value is "used" on line 22.
let x = [];
let y = [];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    x.push(mouseX);
    y.push(mouseY);
    if (x.length > 100) { // Controls the number of circles. It ensures the number of circles is no more than 100.
        x.shift();
        y.shift();
    }
    for (let i = 0; i < x.length; i++) {
        const alpha = 255 * (i / 100); // This sets the transparency of a circle. The fade effect uses this.
        const r = (x[i] / width) * 255; // This controls how much red is in a circle.
        const b = (y[i] / height) * 255; // This controls how much blue is in a circle.
        fill(r, 255, b, alpha); // The number on this line controls how much green is in a circle.
        circle(x[i], y[i], DIAMETER);
    }
}