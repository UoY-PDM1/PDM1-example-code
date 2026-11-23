let cat;
let catW = 512;
let catH = 410;

async function setup() {
    createCanvas(catW, catH);
    cat = await loadImage("assets/pallas_cat.jpg");
    imageMode(CENTER);
}

function draw() {
    image(cat, width / 2, height / 2, catW, catH);
    if (catH < cat.height) {
        catW++;
        catH++;
    }
}
