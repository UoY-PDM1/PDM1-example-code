let aButton;


function setup() {
    createCanvas(400, 300);
    aButton = createButton("Click Me!");

    const mainContainer = select("main");
    aButton.parent(mainContainer);
    aButton.size(200, 100);
    aButton.position(width / 2 - 100, height / 2 - 50);

}


function draw() {
}

function mouseClicked() {

}