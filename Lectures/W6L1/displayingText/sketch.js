let typewriter;
let computer;


async function setup() {
    createCanvas(600, 600);
    typewriter = await loadFont("assets/Inconsolata.otf");
    computer = await loadFont("assets/PressStart2P-Regular.ttf");
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