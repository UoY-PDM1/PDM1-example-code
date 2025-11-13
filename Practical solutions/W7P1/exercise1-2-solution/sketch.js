let bgPicker, fillPicker;

function setup() {
    createCanvas(400, 300);
    bgPicker = createColorPicker(color(0));
    fillPicker = createColorPicker(color(255));
    const container = select("main");
    bgPicker.parent(container);
    fillPicker.parent(container);
    bgPicker.position(10, 10);
    fillPicker.position(width / 2 + 10, 10);
}

function draw() {
    background(bgPicker.value());
    fill(fillPicker.value());
    textSize(16);
    textAlign(LEFT, TOP);
    text("background", 65, 15);
    text("fill", width / 2 + 65, 15);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Hello, World!", 0, 0, width, height);
}