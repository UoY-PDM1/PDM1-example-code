let dundundun, amp;

function preload() {
    dundundun = loadSound("assets/153405__copyc4t__dundundunnnextreme.wav");
}

function setup() {
    createCanvas(400, 300);
    rectMode(CENTER);
    amp = new p5.Amplitude();
    amp.setInput(dundundun);
}

function draw() {
    background(0);
    rect(width / 2, height / 2, amp.getLevel() * width, 100);
}

function mouseClicked() {
    dundundun.play();
}