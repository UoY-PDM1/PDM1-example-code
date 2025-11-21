let foxcat, grass, rock, sand, water, save;
let panelButtons = [];
let selectedButton = -1;
let sprites = [];
let placedSprites = [];
const GRID_SIZE = 20;

function preload() {
    foxcat = loadImage("assets/foxcat.png");
    grass = loadImage("assets/grass.png");
    rock = loadImage("assets/rock.png");
    sand = loadImage("assets/sand.png");
    water = loadImage("assets/water.png");
}

function setup() {
    createCanvas(350, 300);
    createSpritePanel();
    save = createButton("Save");
    save.parent(select("main"));
    save.size(50, 30);
    save.position(300, height - 30);
    save.mouseClicked(saveLevel)
}

function draw() {
    background(255);
    strokeWeight(1);
    stroke(0);
    fill(235);
    square(0, 0, 300);
    drawObjectCollection(panelButtons);
    drawObjectCollection(placedSprites);
    if (isMouseOverArea(0, 0, 300, 300)) {
        highlightGridCell();
    }
}

function mouseClicked() {
    if (isMouseOverArea(0, 0, 300, 300) && selectedButton > -1) {
        const sprite = panelButtons[selectedButton].makeTile(getGridCoord(mouseX), getGridCoord(mouseY));
        placedSprites.push(sprite)
    } else if (isMouseOverArea(300, 0, 50, 300)) {
        updatePanel();
    }
}

/**
 * Saves the placed sprites to a text file called scene.txt. Each line 
 * in the file has the following format:
 * imageName,xCoordinate,yCoordinate
 * @example
 * grass,0,0
 */
function saveLevel() {
    let lines = [];
    for (let sprite of placedSprites) {
        let name = "";
        let img = sprite.getImage();
        if (img === grass) {
            name = "grass";
        } 
        else if (img === rock) {
            name = "rock";
        } else if (img === water) {
            name = "water";
        } else if (img === sand) {
            name = "sand";
        } else if (img === foxcat) {
            name = "foxcat";
        }
        lines.push(`${name},${sprite.getX()},${sprite.getY()}`); 
    }
    saveStrings(lines, "scene.txt");
}

/**
 * Finds the grid cell coordinate of a pixel.
 * @param {number} value A pixel value e.g. an x coordinate
 * @returns {number} The coordinate of the grid cell containing the pixel
 */
function getGridCoord(value) {
    return floor(value / GRID_SIZE) * GRID_SIZE;
}

/**
 * Highlights a grid cell in the scen area.
 */
function highlightGridCell() {
    const x = getGridCoord(mouseX);
    const y = getGridCoord(mouseY);
    noStroke();
    fill(150);
    square(x, y, GRID_SIZE);
}

/**
 * Updates the status of the panel buttons when a button is selected
 */
function updatePanel() {
    for (let i = 0; i < panelButtons.length; i++) {
        if (isMouseOverArea(panelButtons[i].getX(), panelButtons[i].getY(), panelButtons[i].getWidth(), panelButtons[i].getWidth())) {
            panelButtons[i].toggle();
            if (selectedButton === i) {
                selectedButton = -1;
            } else {
                if (selectedButton > -1) {
                    panelButtons[selectedButton].toggle();
                }
                selectedButton = i;
            }
        }
    }
}

/**
 * Creates the button panel
 */
function createSpritePanel() {
    panelButtons.push(
        new PanelButton(grass, 315, 50),
        new PanelButton(rock, 315, 80),
        new PanelButton(sand, 315, 110),
        new PanelButton(water, 315, 140),
        new PanelButton(foxcat, 315, 170)
    )
}

/**
 * Draws each object in an array of objects. Assumes all objects 
 * have a draw() method.
 * @param {object} arr An array of objects.
 */
function drawObjectCollection(arr) {
    for (let obj of arr) {
        obj.draw();
    }
}

/**
 * Checks if the mouse is over a rectangular area. 
 * @param {number} x The x coordinate of the area (CORNER mode).
 * @param {number} y The y coordinate of the area (CORNER mode).
 * @param {number} width The width of the area
 * @param {number} height The height of the area
 * @returns {boolean} True if the mouse is over the area, false otherwise.
 */
function isMouseOverArea(x, y, width, height) {
    return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
}

/**
 * Represents a sprite selection button on the panel.
 */
class PanelButton {
    #sprite
    #isSelected = false;

    /**
     * Creates a new PanelButton
     * @param {p5.Image} image The image in the button
     * @param {number} x The x coordinate of the button (CORNER mode)
     * @param {number} y The y coordinate of the button (CORNER mode)
     */
    constructor(image, x, y) {
        this.#sprite = new Sprite(image, x, y);
    }

    /**
     * Draws the button.
     */
    draw() {
        if (this.#isSelected) {
            noStroke();
            fill(255, 0, 0);
            square(this.#sprite.getX() - 5, this.#sprite.getY() - 5, this.#sprite.getWidth() + 10);
        }
        this.#sprite.draw();
    }

    /**
     * Gets the button's selection status.
     * @returns {boolean} True if the button is selected, false if not.
     */
    isSelected() {
        return this.#isSelected;
    }

    /**
     * Toggle the selection status of the button.
     */
    toggle() {
        this.#isSelected = !this.#isSelected;
    }

    /**
     * Makes a new tile of the button immage in the given location.
     * @param {number} x The x coordinate of the tile.
     * @param {number} y The y coordinate of the tile.
     * @returns {Sprite} A new Sprite to place on the drawing area.
     */
    makeTile(x, y) {
        return new Sprite(this.#sprite.getImage(), x, y);
    }

    /**
     * Gets the x coordinate of the button
     * @returns {number} The x coordinate
     */
    getX() {
        return this.#sprite.getX();
    }

    /**
     * Gets the y coordinate of the button
     * @returns {number} The y coordinate
     */
    getY() {
        return this.#sprite.getY();
    }

    /**
     * Gets the width of the button
     * @returns {number} The width of the button
     */
    getWidth() {
        return this.#sprite.getWidth();
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
     * Gets the y coordinate of the sprite.
     * @returns {number} The width of the sprite.
     */
    getWidth() {
        return this.#img.width;
    }

    /**
     * Gets the sprite image object
     * @returns {p5.Image} The sprite's image object
     */
    getImage() {
        return this.#img;
    }
}