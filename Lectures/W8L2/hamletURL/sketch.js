let rawText;

function preload() {
    rawText = loadStrings("http://www.gutenberg.org/cache/epub/1787/pg1787.txt");
}

function setup() {
    createCanvas(300, 300);
    console.log(rawText);
}