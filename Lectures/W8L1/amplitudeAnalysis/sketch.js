let dundundun, amp;

async function setup() {
    dundundun = await loadSound("assets/153405__copyc4t__dundundunnnextreme.wav");
    createCanvas(800, 300);
    rectMode(CENTER);
    amp = new p5.Amplitude();
    dundundun.connect(amp);
}

function draw() {
    background(0);
    rect(width / 2, height / 2, amp.getLevel() * width, 100);
}

function mouseClicked() {
    dundundun.play();
}