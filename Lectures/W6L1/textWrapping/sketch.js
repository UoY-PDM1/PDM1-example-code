let computer

async function setup() {
    createCanvas(600, 400);
    computer = await loadFont("assets/PressStart2P-Regular.ttf");
}

function draw() {
    background(0);
    fill(255);
    textFont(computer);
    textSize(24);
    textAlign(CENTER, CENTER);
    //text("Wrap this text over two lines", 50, 100, 500, 200); // uses a bounding box to automatically wrap
    text("Wrap\nthis text\nover three lines", width / 2, height / 2); // uses \n to make a line break at specific places
}


