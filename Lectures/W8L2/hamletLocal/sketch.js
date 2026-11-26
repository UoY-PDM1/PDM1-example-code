let rawText;

async function setup() {
    createCanvas(300, 300);
    rawText = await loadStrings("assets/hamlet.txt")
    console.log(rawText);
}