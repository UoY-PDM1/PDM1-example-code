/**
The purpose of this example is to test the process of inserting a new
score into the high scores array in sorted order.

Press 'h' to generate a new highest score. Press 'm' to generate a score
somewhere between the lowest and highest score. Press 'l' to generate a
new lowest score. Generated scores will have the player name GEN.
**/
let computerFont, scores, highScores, startY, scoresY, scoresHeight;
const SCORE_FILE = "assets/high_scores.txt";

function preload() {
    scores = loadStrings(SCORE_FILE);
    computerFont = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(400, 400);
    highScores = populateHighScores(scores);
    startY = height;
    scoresY = startY;
    scoresHeight = calculateScoresHeight(highScores.length);
    textSize(12);
    textFont(computerFont);
    textAlign(CENTER, TOP);
    fill(0, 255, 100);
}

function draw() {
    background(0);
    let display = "HIGH SCORES\n";
    for (let score of highScores) {
        display += score.player + " ................. " + score.score + "\n";
    }
    text(display, 0, scoresY, width, scoresHeight);
    moveText();
}

function keyTyped() {
    if (key === "h" || key === "m" || key === "l") {
        let newScore;
        let topScore = highScores[0].score;
        let bottomScore = highScores[highScores.length - 1].score;
        if (key === "h") {
            newScore = new HighScore("GEN", topScore + 10);
        } else if (key === "m") {
            newScore = new HighScore("GEN", floor(random(bottomScore + 1, topScore)));
        } else if (key === "l") {
            newScore = new HighScore("GEN", bottomScore - 10);
        }
        highScores = addNewScore(newScore, highScores);
        scoresHeight = calculateScoresHeight(highScores.length);
    } else if (key === "s") {
        saveScores(highScores);
    }
}

/**
 * Calculates the next y location of the scrolling text
 */
function moveText() {
    if (scoresY <= -scoresHeight) {
        scoresY = startY;
    } else {
        scoresY--;
    }
}

/**
 * Helper function. This calculation is repeated twice and it's not immediately obvious what it's
 * doing so I'm using a helper function to make the code more readable.
 * @param {number} numScores The number of scores in the high scores array
 * @returns {number} The height of the text in the displayed scores
 */
function calculateScoresHeight(numScores) {
    return 15 * (numScores + 1);
}

/**
 * Inserts a new HighScore into the array in sorted position. Returns 
 * a new copy of the array. This function does the same as the version 
 * below, it just uses fancier JS syntax!
 * @param {HighScore} newScore The new HighScore to insert.
 * @param {HighScore[]} savedScores The array of existing HighScores.
 * @returns {HighScore[]} The array of HighScores with the new HighScore inserted.
 */
function addNewScore_Fancy(newScore, savedScores) {
    for (let i = 0; i < savedScores.length; i++) {
        if (savedScores[i].score <= newScore.score) {
            /**
             * The following line creates a new array from the savedScores elements before the current index, the new score, then the elements from the current index to the end of savedScores
             * To find out more, look up the JavaScript "spread operator" and the slice() method.
             */
            let newHighScores = [...savedScores.slice(0, i), newScore, ...savedScores.slice(i)];
            return newHighScores;
        }
    }
    savedScores.push(newScore);
    return savedScores;
}

/**
 * Inserts a new HighScore into the array in sorted position. Returns 
 * a new copy of the array.
 * @param {HighScore} newScore The new HighScore to insert.
 * @param {HighScore[]} savedScores The array of existing HighScores.
 * @returns {HighScore[]} The array of HighScores with the new HighScore inserted.
 */
function addNewScore(newScore, savedScores) {
    let newScores = [];
    let indexFound = false;
    for (let i = 0; i < savedScores.length; i++) {
        if (savedScores[i].score < newScore.score && !indexFound) {
            newScores.push(newScore);
            indexFound = true;
        }
        newScores.push(savedScores[i]);
    }
    if (!indexFound) {
        newScores.push(newScore);
    }
    return newScores;
}

/**
 * Saves an array of high scores to a file
 * @param {HighScore[]} scores An array of HighScore objects
 */
function saveScores(scores) {
    let toSave = [];
    for (let score of scores) {
        toSave.push(score.toString());
    }
    saveStrings(toSave, SCORE_FILE);
}

/**
 * Helper function that converts the text data from the file to an array of
 * HighScore objects. Assumes that the scores read from the file are already
*  sorted.
 * @param {string[]} scoreText The array of strings read from the text file
 * @returns {HighScore[]} An array of HighScore objects
 */
function populateHighScores(scoreText) {
    let scoreArr = [];
    for (let score of scoreText) {
        let parts = split(score, " ");
        scoreArr.push(new HighScore(parts[0], parts[1]));
    }
    return scoreArr;
}

/**
 * Stores a player name and score.
 */
class HighScore {
    player;
    score;

    /**
     * Creates a new HighScore.
     * @param {string} player The player name
     * @param {string | number} score The player's score
     */
    constructor(player, score) {
        this.player = player;
        this.score = parseInt(score);
    }

    /**
     * Represents the HighScore as a string.
     * @returns {string} A string representation of the HighScore.
     */
    toString() {
        return this.player + " " + this.score;
    }
}