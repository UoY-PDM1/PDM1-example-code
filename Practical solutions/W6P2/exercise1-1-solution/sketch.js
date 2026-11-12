/**
 * A class representing a Star. 
 */
class Star {
    x;
    y;
    
    /**
     * Create a new star object.
     * @param {number} x The x coordinate of the star
     * @param {number} y The y coordinate of the star
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Make the star fall vertically.
     * @param {number} speed The speed the star should fall at on the y axis
     */
    fall(speed) {
        this.y += speed;
    }

    /**
     * Make the star shoot horizontally.
     * @param {number} speed The speed the star should move on the x axis.
     */
    shoot(speed) {
        this.x += speed;
    }

    /**
     * Draw the star
     */
    draw() {
        fill(255, 234, 0);
        noStroke();
        triangle(this.x, this.y - 50, this.x - 20, this.y, this.x + 20, this.y);
        triangle(this.x - 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x + 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x - 20, this.y - 5, this.x, this.y + 10, this.x - 35, this.y + 30);
        triangle(this.x, this.y + 10, this.x + 20, this.y - 5, this.x + 35, this.y + 30);
    }
}

let fallingStar = new Star(200, 0);
let shootingStar = new Star(0, 200);

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    shootingStar.shoot(5);
    shootingStar.draw();
    fallingStar.fall(2);
    fallingStar.draw();
}