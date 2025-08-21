let saucer;

function preload() {
    saucer = new SpaceShip();
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    fill(200, 200, 200);
    ellipse(width / 2, height * 1.75, width * 2, height * 1.75);
    saucer.draw();
    saucer.update();
}

function mouseClicked() {
    saucer.start();
}

/**
 * Represents a spaceship
 */
class SpaceShip {
    #x = 300;
    #y = -200;
    #xSpeed = 2;
    #ySpeed = 0.5;
    #flying;
    #landing;
    #status = "stop";
    #steam;

    constructor() {
        // Sound by orginaljun, freesound.com
        this.#flying = loadSound("assets/401696__orginaljun__retro_robot_thinking_01.wav");
        this.#landing = loadSound("assets/365071__sniperous__steam.wav");
    }

    /**
     * Starts the spaceship animation
     */
    start() {
        if (this.#status === "stop") {
            this.#flying.loop();
            this.#status = "flying";
        }
    }

    /**
     * Updates the spaceship based on its current state and position
     */
    update() {
        if (this.#status === "flying") {
            this.#fly();
            if (this.#y > 330) {
                this.#land();
            }
        }
    }

    /**
     * Flying animation
     */
    #fly() {
        if (this.#x < 50 || this.#x > width - 50) {
            this.#xSpeed *= -1;
        }
        this.#x += this.#xSpeed;
        this.#y += this.#ySpeed;
        this.#flying.setVolume(map(this.#y, -200, 330, 0, 1));
        if (this.#y > 0) {
            this.#flying.rate((height - this.#y) / height);
        }
        this.#flying.pan(map(this.#x, 0, width, -1, 1));
    }

    /**
     * Landing animation
     */
    #land() {
        if (this.#status === "flying") {
            this.#steam = new Steam(this.#x, this.#y);
        }
        this.#status = "land";
        this.#flying.stop();
        this.#landing.pan(map(this.#x, 0, width, -1, 1));
        this.#landing.play();
    }

    /**
     * Draws the spaceship
     */
    draw() {
        if (this.#status === "land") {
            this.#steam.draw();
        }
        stroke(0);
        // Base
        fill(0, 255, 255);
        arc(this.#x, this.#y, 100, 60, 0, PI, PIE);
        // Cabin
        fill(255, 255, 160);
        arc(this.#x, this.#y, 40, 60, PI, 0);
        // Alien body
        fill(0, 255, 0);
        arc(this.#x, this.#y, 30, 40, PI, 0);
        // Alien eyes
        fill(255);
        ellipse(this.#x - 5, this.#y - 15, 10, 15);
        ellipse(this.#x + 5, this.#y - 15, 10, 15);
        fill(0);
        circle(this.#x - 3, this.#y - 15, 5);
        circle(this.#x + 3, this.#y - 15, 5);
    }
}

/**
 * Creates two jets of steam
 */
class Steam {
    #particles = [];
    #x;
    #y;
    #counter = 8 * 60 - 255; // 8 second sound clip minus the lifespan of the last particle

    /**
     * Creates a new Steam
     * @param {number} x The x coordinate in the centre of the two jets
     * @param {number} y The y coordinate of the starting point of the jets
     */
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    /**
     * Adds a new particle to each jet of stream
     */
    #addParticles() {
        this.#particles.push(new Particle(this.#x - 30, this.#y, random(-2, -0.5)), new Particle(this.#x + 30, this.#y, random(0.5, 2)));
    }

    /**
     * Draws all particles in the Steam
     */
    draw() {
        if (this.#counter > 0) {
            this.#addParticles();
        }
        for (const p of this.#particles) {
            p.draw();
        }
        this.#counter--;
    }
}

/**
 * An individual particle of steam
 */
class Particle {
    #x;
    #y;
    #xSpeed;
    #ySpeed = random(-1, -0.5);
    #lifespan = 255;
    #width = random(3, 8);

    /**
     * Creates a new Particle
     * @param {number} x The starting x coordinate of the particle
     * @param {number} y The starting y coordinate of the particle
     * @param {number} xSpeed The speed of the particle on the x axis
     */
    constructor(x, y, xSpeed) {
        this.#x = x;
        this.#y = y;
        this.#xSpeed = xSpeed;
    }

    /**
     * Draws the particle
     */
    draw() {
        if (this.#lifespan >= 0) {
            noStroke();
            fill(255, this.#lifespan);
            circle(this.#x, this.#y, this.#width);
            this.#lifespan--;
            this.#x += this.#xSpeed;
            this.#y += this.#ySpeed;
        }
    }
}