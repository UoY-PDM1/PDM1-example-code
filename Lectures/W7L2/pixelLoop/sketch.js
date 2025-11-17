let frog;

function preload() {
    frog = loadImage("assets/frog.jpg");
}

function setup() {
    createCanvas(frog.width, frog.height);
}

function draw() {
    image(frog, 0, 0);
}

function keyPressed() {
    let totalChannels = frog.width * frog.height * 4;
    for (let i = 0; i < totalChannels; i++) {
        // if frog.pixels[i] is the red channel, print "RED"
        // if frog.pixels[i] is the green channel, print "GREEN"
        // if frog.pixels[i] is the blue channel, print "BLUE"
        // if frog.pixels[i] is the alpha channel, print "ALPHA"
        if (i % 4 === 0) {
            console.log("red");
        } else if (i % 4 === 1) {
            console.log("green");
        } else if (i % 4 === 2) {
            console.log("blue");
        } else if (i % 4 === 3) {
            console.log("alpha");
        }
        
    }
}