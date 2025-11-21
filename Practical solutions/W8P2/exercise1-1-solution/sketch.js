let rawReviews, posFont, negFont;
let reviews = [];

function preload() {
    rawReviews = loadStrings("assets/imdb_labelled.txt");
    posFont = loadFont("assets/HennyPenny-Regular.ttf");
    negFont = loadFont("assets/Creepster-Regular.ttf");
}

function setup() {
    createCanvas(800, 600);
    populateReviews();
    background(0);
}

function keyPressed() {
    let index = floor(random(reviews.length));
    background(0);
    reviews[index].draw();
}

/**
 * Converts the raw review text into an array of Review objects
 */
function populateReviews() {
    for (const review of rawReviews) {
        reviews.push(new Review(review));
    }
}

/**
 * Stores the text and sentiment of a film review.
 */
class Review {
    #text;
    #isPositive;

    /**
     * Creates a new Review
     * @param {string} rawText The raw text read from the file, including the review text and the sentiment label
     */
    constructor(rawText) {
        let parts = split(rawText, "\t");
        this.#text = parts[0];
        this.#isPositive = parts[1] === "1";
        if (parts[1] !== "1" && parts[1] !== "0") {
            console.log(rawText, "." + parts[1] + ".");
        }
    }

    /**
     * Displays the review text
     */
    draw() {
        if (this.#isPositive) {
            textFont(posFont);
            fill(0, 255, 0);
        } else {
            textFont(negFont);
            fill(255, 0, 0);
        }
        textSize(48);
        textAlign(LEFT, TOP);
        text(this.#text, 20, 20, width - 40, height - 40);
    }
}