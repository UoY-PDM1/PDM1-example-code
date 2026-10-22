const SQUARE_SIZE = 50;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    let x = 0;
    while (x < width) {
        let y = 0; // The y variable needs to be reset for each new x
        while (y < height) {
            if (x % 100 === y % 100) {
                fill(0);
            } else {
                fill(255);
            }
            square(x, y, SQUARE_SIZE);
            y += SQUARE_SIZE; // Increase only the loop variable for the current loop
        }
        x += SQUARE_SIZE; // Increase only the loop variable for the current loop
    }

    // A solution for the extension activity:
    // for (let x = 0; x < width; x += SQUARE_SIZE) {
    //     for (let y = 0; y < height; y += SQUARE_SIZE) {
    //         if (x % 100 === y % 100) {
    //             fill(0);
    //         } else {
    //             fill(255);
    //         }
    //         square(x, y, SQUARE_SIZE);
    //     }
    // }
}
