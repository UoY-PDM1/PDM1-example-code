let rawText;

function preload() {
    rawText = loadStrings("assets/hamlet.txt");
}

function setup() {
    createCanvas(300, 300);
    console.log(rawText);
}