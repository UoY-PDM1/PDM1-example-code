/**
 * Image tiles from http://opengameart.org/content/rpg-tiles-cobble-stone-paths-town-objects
 * Creators: Zabin, Daneeklu, Jetrel, Hyptosis, Redshrike, Bertram 
 */
const GRID_SIZE = 32;
const NUM_IMAGES = 256;
const NUM_GRID_CELLS = 15;
const IMAGE_BASE = "PathAndObjects_";
let sprites = [];
let images = {};
let scene;

function preload() {
    for (let i = 0; i < NUM_IMAGES; i++) {
        let name = `${IMAGE_BASE}${i + 1}`;
        let img = loadImage(`assets/${name}.png`);
        images[name] = img;
    }
    scene = loadStrings("assets/scene.txt");
}

function setup() {
    createCanvas(GRID_SIZE * NUM_GRID_CELLS, GRID_SIZE * NUM_GRID_CELLS);
    createSprites(scene);
}

function draw() {
    for (let sprite of sprites) {
        sprite.draw();
    }
}

/**
 * Populates the sprites array with Sprite objects using the information stored in 
 * the scenes files
 * @param {string[]} tiles An array of strings storing information about the tiles 
 * that make up the scene. Each string in the array should have the format:
 * spriteName,xCoordinate,yCoordinate
 */
function createSprites(tiles) {
    for (let tile of tiles) {
        let parts = split(tile, ",");
        let x = parseInt(parts[1]);
        let y = parseInt(parts[2]);
        sprites.push(new Sprite(images[parts[0]], x, y));
    }
}

/**
 * A class representing a Sprite (or tile)
 */
class Sprite {
    #x;
    #y;
    #img;

    /**
     * Creates a new Sprite
     * @param {p5.Image} img The Sprite's image
     * @param {number} x The x coordinate (CORNER mode)
     * @param {number} y The y coordinate (CORNER mode)
     */
    constructor(img, x, y) {
        this.#img = img;
        this.#x = x;
        this.#y = y;
    }

    /**
     * Draws the Sprite
     */
    draw() {
        image(this.#img, this.#x, this.#y);
    }

    /**
     * Get the x coordinate of the sprite.
     * @returns {number} The x coordinate of the sprite (CORNER mode)
     */
    getX() {
        return this.#x;
    }

    /**
     * Gets the y coordinate of the sprite.
     * @returns {number} The y coordinate of the sprite (CORNER mode)
     */
    getY() {
        return this.#y;
    }

    /**
     * Gets the sprite image object
     * @returns {p5.Image} The sprite's image object
     */
    getImage() {
        return this.#img;
    }
}