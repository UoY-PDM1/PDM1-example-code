let modeButton;

function setup() {
    createCanvas(400, 300);
    modeButton = createButton("Click Me!");

    let mainContainer = select("main");
    modeButton.parent(mainContainer);
    modeButton.position(width / 2 - 50, height / 2 - 25);
    modeButton.size(100, 50);
    modeButton.mouseClicked(testEventListener)
}

function testEventListener() {
    console.log("Button clicked!");
    background(random(255), random(255), random(255));
}

function draw() {
    
}

function mouseClicked() {
    circle(random(width), random(height), 30);
    console.log("mouse clicked anywhere");
}