let pyramid;

function setup() {
    createCanvas(600, 400);
    pyramid = new Pyramid(width / 2, height, width, 50);
}

function draw() {
    background(255);
    fill(0);
    pyramid.draw();
}

function mouseClicked() {
    if (pyramid.containsCoordinate(mouseX, mouseY)) {
        pyramid.build();
    }
}

/**
 * Represents a pyramid made up of blocks
 */
class Pyramid {
    #blockHeight;
    #blocks = [];

    /**
     * Creates a new Pyramid
     * @param {number} x The x coordinate of the centre of the pyramid
     * @param {number} y The y coordinate of the bottom of the pyramid base
     * @param {number} baseWidth The width of the base of the pyramid
     * @param {number} blockHeight The height of each block in the pyramid
     */
    constructor(x, y, baseWidth, blockHeight) {
        this.#blockHeight = blockHeight
        let base = new Block(x, y - blockHeight / 2, baseWidth, this.#blockHeight);
        this.#blocks.push(base);
    }

    /**
     * Draws the pyramid
     */
    draw() {
        for (let block of this.#blocks) {
            block.draw();
        }
    }

    /**
     * Checks if any of the blocks in the pyramid contain the given x, y coordinate
     * @param {number} x An x coordinate
     * @param {number} y A y coordinate
     * @returns {boolean} True if the pyramid contains the coordinate, false if not
     */
    containsCoordinate(x, y) {
        for (let block of this.#blocks) {
            if (block.containsCoordinate(x, y)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Adds a new block to the pyramid. The new block will be added on top of the last 
     * block and will be shorter than the previous block.
     */
    build() {
        let lastBlock = this.#blocks[this.#blocks.length - 1];
        let newWidth = lastBlock.getWidth() - this.#blockHeight * 2;
        if (newWidth > 0) {
            let newBlock = new Block(lastBlock.getX(), lastBlock.getY() - this.#blockHeight, newWidth, this.#blockHeight);
            this.#blocks.push(newBlock);
        }
    }
}

/**
 * A Block within a Pyramid.
 */
class Block {
    #x;
    #y;
    #width;
    #height;

    /**
     * Creates a new block.
     * @param {number} x The x coordinate (in CENTER mode) 
     * @param {number} y The y coordinate (in CENTER mode)
     * @param {number} w The width of the block
     * @param {number} h The height of the block
     */
    constructor(x, y, w, h) {
        this.#x = x;
        this.#y = y;
        this.#width = w;
        this.#height = h;
    }

    /**
     * Draws the block.
     */
    draw() {
        rectMode(CENTER);
        rect(this.#x, this.#y, this.#width, this.#height);
    }

    /**
     * Checks if this block contains the given x, y coordinate
     * @param {number} x An x coordinate
     * @param {number} y A y coordinate
     * @returns {boolean} True if the block contains the coordinate, false otherwise
     */
    containsCoordinate(x, y) {
        return x >= this.#x - this.#width / 2 && x <= this.#x + this.#width / 2
                && y >= this.#y - this.#height / 2 && y <= this.#y + this.#height / 2;
    }

    /**
     * Gets the width of the block.
     * @returns {number} The width of the block
     */
    getWidth() {
        return this.#width;
    }

    /**
     * Gets the x coordinate of the block
     * @returns {number} The x coordinate of the block (CENTER mode)
     */
    getX() {
        return this.#x;
    }

    /**
     * Gets the y coordinate of the block
     * @returns {number} The y coordinate of the block (CENTER mode)
     */
    getY() {
        return this.#y;
    }
}