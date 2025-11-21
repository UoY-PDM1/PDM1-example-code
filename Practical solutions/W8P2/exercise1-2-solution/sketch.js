let hamletText, hamletCount, opheliaCount, denmarkCount, horatioCount, theCount;

function preload() {
    hamletText = loadStrings("assets/hamlet.txt");
}

function setup() {
    createCanvas(600, 400);
    let words = getWords(hamletText);
    console.log("Number of words =", words.length);
    hamletCount = countOccurrences(words, "hamlet");
    console.log("Hamlet count =", hamletCount);
    opheliaCount = countOccurrences(words, "ophelia");
    console.log("Ophelia count =", opheliaCount);
    denmarkCount = countOccurrences(words, "denmark");
    console.log("Denmark count =", denmarkCount);
    horatioCount = countOccurrences(words, "horatio");
    console.log("Horatio count =", horatioCount);
    textAlign(LEFT, TOP);
}

function draw() {
    const MARGIN = 20;
    background(255);
    textSize(hamletCount);
    text("Hamlet", MARGIN, MARGIN);
    textSize(opheliaCount);
    text("Ophelia", MARGIN, hamletCount + MARGIN);
    textSize(horatioCount);
    text("Horatio", MARGIN, opheliaCount + hamletCount + MARGIN);
    textSize(denmarkCount);
    text("Denmark", MARGIN, hamletCount + opheliaCount + horatioCount + MARGIN);
}

/**
 * Gets all the words in an array of lines of text. A "word" is any string of letters 
 * or numbers excluding spaces and punctuation.
 * @param {string[]} lines An array of lines of text
 * @returns {string[]} An array of all words in all lines
 */
function getWords(lines) {
    let words = [];
    for (let line of lines) {
        let split = splitTokens(line, " ,.!'?[]();\\-:*%&=@#{}\"/\\\\_<>~");
        for (let word of split) {
            words.push(word);
        }
    }
    return words;
}

/**
 * Count the number of occurrences of a word in an array of words (case insensitive).
 * @param {string[]} wordArray An array of words
 * @param {string} word The word to count
 * @returns {number} The number of times the word occurs in wordArray
 */
function countOccurrences(wordArray, word) {
    word = word.toLowerCase();
    let count = 0;
    for (let item of wordArray) {
        if (item.toLowerCase() === word) {
            count++;
        }
    }
    return count;
}
