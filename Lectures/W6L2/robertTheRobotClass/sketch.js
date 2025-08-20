

let robert;

function setup() {
    createCanvas(800, 800);
    robert = new Robot(random(width), random(height), color(random(255), random(255), random(255)));
}

function draw() {
    background(255);
    robert.updateLocation(mouseX, mouseY);
    robert.draw();
}

/**
 * A class representing a robot.
 *
 * Note: it is safe to define the class at the bottom of the file because it is 
 * not instantiated until setup() is called by p5.js, at which point the class 
 * definition has been read into memory.
 */
class Robot {
    x;
    y;
    fillColour;

    /**
     * Creates a new robot
     * @param {number} x The x coordinate of the robot.
     * @param {number} y The y coordinate of the robot
     * @param {Color} fillColour The robot's fill colour
     */
    constructor(x, y, fillColour) {
        this.x = x;
        this.y = y;
        this.fillColour = fillColour;
    }

    /**
     * Draws the robot
     */
    draw() {
        rectMode(CENTER);
        this.#head();
        this.#body();
        this.#legs();
    }

    /**
     * Update's the robot's location
     * @param {number} x The new x coordinate
     * @param {number} y The new y coordinate
     */
    updateLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * A private "helper" method that draws just the robot's head.
     */
    #head() {
        fill(this.fillColour);
        // Head
        rect(this.x, this.y - 115, 60, 70);
        // Next
        rect(this.x, this.y - 65, 10, 30);
        // Mouth
        arc(this.x, this.y - 80, 40, 20, 0, PI, CHORD);
        // Eyes
        fill(207, 250, 23);
        arc(this.x - 15, this.y - 100, 20, 30, PI, TWO_PI, CHORD);
        arc(this.x + 15, this.y - 100, 20, 30, PI, TWO_PI, CHORD);
        // Antennae
        line(this.x + 30, this.y - 120, this.x + 50, this.y - 130);
        line(this.x - 30, this.y - 120, this.x - 50, this.y - 130);
        fill(255, 0, 0);
        circle(this.x + 50, this.y - 130, 10);
        circle(this.x - 50, this.y - 130, 10);
    }

    /**
     * A private "helper" method that draws just the robot's body.
     */
    #body() {
        fill(this.fillColour);
        // Torso
        square(this.x, this.y, 100);
        // Left arm
        rect(this.x + 65, this.y - 25, 30, 10);
        circle(this.x + 85, this.y - 25, 10);
        rect(this.x + 85, this.y + 20, 10, 80);
        circle(this.x + 85, this.y + 70, 20);
        // Right arm
        rect(this.x - 65, this.y - 25, 30, 10);
        circle(this.x - 85, this.y - 25, 10);
        rect(this.x - 85, this.y + 20, 10, 80);
        circle(this.x - 85, this.y + 70, 20);
    }
    
    /**
     * A private "helper" method that draws just the robot's legs.
     */
    #legs() {
        fill(this.fillColour);
        // Left leg
        rect(this.x + 20, this.y + 65, 10, 30);
        circle(this.x + 20, this.y + 85, 10);
        rect(this.x + 20, this.y + 130, 10, 80);
        arc(this.x + 20, this.y + 170, 30, 20, PI, TWO_PI, CHORD);
        // Right leg
        rect(this.x - 20, this.y + 65, 10, 30);
        circle(this.x - 20, this.y + 85, 10);
        rect(this.x - 20, this.y + 130, 10, 80);
        arc(this.x - 20, this.y + 170, 30, 20, PI, TWO_PI, CHORD);
    }
}