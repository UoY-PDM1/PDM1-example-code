let typewriter, computer

function preload() {
    typewriter = loadFont("assets/Typewriter-LAYy.ttf");
    computer = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    
    fill(255);
    textFont(typewriter);
    textSize(48);
    text("Hello, World!", 0, 48);

    textFont(computer);
    fill(0, 255, 100);
    text("Hello, Mouse!", mouseX, mouseY);
}