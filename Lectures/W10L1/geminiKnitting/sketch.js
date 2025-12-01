/**
 * Gemini prompt 1: In p5.js, create an app to help knitters design jumpers
 * 
 * The initial output didn't run because it depended on HTML input controls 
 * that require knowledge of web development, so a second prompt was needed:
 * 
 * Gemini prompt 2: Use p5.js input controls instead of HTML controls
 * 
 * 
 */


// --- JUMPER DESIGNER VARIABLES ---

// Canvas and Scale
const CANVAS_W = 780;
const CANVAS_H = 550; // Increased height to fit controls below
const DRAWING_H = 450; // Height allocated for the jumper drawing
const SCALE_FACTOR = 4; // 1 cm = 4 pixels for visualization

// Dimensions (in cm)
let bodyCircumference = 100;
let bodyLength = 55;
let sleeveLength = 45;
let neckOpening = 18;

// Gauge (Stitches/Rows per 10cm)
let gaugeStitches = 20; 
let gaugeRows = 28;     

// p5.js Input Elements
let inputs = {};
let sliderLabels = {};

// --- SETUP ---
function setup() {
  // Create p5 canvas
  createCanvas(CANVAS_W, CANVAS_H);
  
  // Initialize Controls
  setupControls();

  // Initial update
  updateMeasurements();
}

// --- CONTROL SETUP ---
function setupControls() {
  let xOffset = 30;
  let yOffset = DRAWING_H + 20; // Start placing controls below the drawing area
  const inputSpacing = 160;

  // --- GAUGE CONTROLS ---

  // Stitches per 10cm (Gauge)
  createLabel('Stitches/10cm:', xOffset, yOffset);
  inputs.gaugeStitches = createInput(gaugeStitches.toString());
  inputs.gaugeStitches.position(xOffset, yOffset + 20);
  inputs.gaugeStitches.size(80);
  inputs.gaugeStitches.input(updateMeasurements);
  xOffset += inputSpacing;

  // Rows per 10cm (Gauge)
  createLabel('Rows/10cm:', xOffset, yOffset);
  inputs.gaugeRows = createInput(gaugeRows.toString());
  inputs.gaugeRows.position(xOffset, yOffset + 20);
  inputs.gaugeRows.size(80);
  inputs.gaugeRows.input(updateMeasurements);
  xOffset += inputSpacing;
  
  // --- DIMENSION CONTROLS ---

  // Body Circumference (cm)
  createLabel('Body Circ. (cm):', xOffset, yOffset);
  inputs.bodyCircumference = createInput(bodyCircumference.toString());
  inputs.bodyCircumference.position(xOffset, yOffset + 20);
  inputs.bodyCircumference.size(80);
  inputs.bodyCircumference.input(updateMeasurements);
  xOffset += inputSpacing;

  // Body Length (cm)
  createLabel('Body Length (cm):', xOffset, yOffset);
  inputs.bodyLength = createInput(bodyLength.toString());
  inputs.bodyLength.position(xOffset, yOffset + 20);
  inputs.bodyLength.size(80);
  inputs.bodyLength.input(updateMeasurements);
  xOffset += inputSpacing;

  // Sleeve Length (cm)
  createLabel('Sleeve Length (cm):', xOffset, yOffset);
  inputs.sleeveLength = createInput(sleeveLength.toString());
  inputs.sleeveLength.position(xOffset, yOffset + 20);
  inputs.sleeveLength.size(80);
  inputs.sleeveLength.input(updateMeasurements);
  xOffset += inputSpacing;
  
  // Neck Opening (cm)
  createLabel('Neck Width (cm):', xOffset, yOffset);
  inputs.neckOpening = createInput(neckOpening.toString());
  inputs.neckOpening.position(xOffset, yOffset + 20);
  inputs.neckOpening.size(80);
  inputs.neckOpening.input(updateMeasurements);
}

// Helper function for creating p5 text labels
function createLabel(text, x, y) {
  let label = createElement('p', text);
  label.style('color', '#333');
  label.style('font-size', '12px');
  label.position(x, y - 15);
  return label;
}


// --- DRAW LOOP ---
function draw() {
  background(240); // Light gray background
  
  // Line separating drawing area from controls
  stroke(200);
  line(0, DRAWING_H, CANVAS_W, DRAWING_H);
  
  // Center the drawing area within the top portion of the canvas
  push();
  translate(CANVAS_W / 2, DRAWING_H / 2);
  
  // Draw the Jumper Shape (Front Panel)
  drawJumper(0, 0); 
  
  pop(); // Restore original transformation
  
  // Display Calculation Results
  // Positioned in the top left corner, outside of the push/pop block
  displayCalculations(20, 20);
}

// --- CORE FUNCTIONS ---

// Function to read values from p5.js inputs and update variables
function updateMeasurements() {
  // Use parseFloat instead of int to allow for gauge decimals
  gaugeStitches = parseFloat(inputs.gaugeStitches.value()) || 0;
  gaugeRows = parseFloat(inputs.gaugeRows.value()) || 0;
  bodyCircumference = parseFloat(inputs.bodyCircumference.value()) || 0;
  bodyLength = parseFloat(inputs.bodyLength.value()) || 0;
  sleeveLength = parseFloat(inputs.sleeveLength.value()) || 0;
  neckOpening = parseFloat(inputs.neckOpening.value()) || 0;
}

// Function to calculate knitting metrics
function calculateKnittingMetrics() {
  // Conversions: cm to stitches/rows
  const st_per_cm = gaugeStitches / 10;
  const row_per_cm = gaugeRows / 10;
  
  // Body Metrics
  const bodyWidth_cm = bodyCircumference / 2;
  // Use round() for cleaner stitch counts, or ceil() if you want to ensure the stitch count is always enough
  const bodyStitches = round(bodyWidth_cm * st_per_cm);
  const bodyRows = round(bodyLength * row_per_cm);
  
  // Sleeve Metrics 
  const sleeveRows = round(sleeveLength * row_per_cm);
  
  // Neck Metrics
  const neckStitches = round(neckOpening * st_per_cm);
  
  return {
    st_per_cm, row_per_cm,
    bodyStitches, bodyRows, bodyWidth_cm,
    sleeveRows,
    neckStitches
  };
}

// Function to draw the Jumper shape
function drawJumper(x, y) {
  const metrics = calculateKnittingMetrics();
  // Scale cm values to pixels
  const widthPx = metrics.bodyWidth_cm * SCALE_FACTOR;
  const lengthPx = bodyLength * SCALE_FACTOR;
  const sleevePx = sleeveLength * SCALE_FACTOR;
  const neckPx = neckOpening * SCALE_FACTOR;
  
  push();
  translate(x, y);

  // 1. Draw Body (Rectangle)
  fill(150, 150, 200); // Light blue for the fabric
  rectMode(CENTER);
  stroke(50);
  rect(0, 0, widthPx, lengthPx);
  
  // 2. Draw Neck Opening (Cutout at the top)
  fill(0); // Black cutout
  noStroke();
  // Neck depth is fixed at 10cm for visualization purposes
  rect(0, -lengthPx/2, neckPx, 10 * SCALE_FACTOR); 
  
  // 3. Draw Sleeves (Triangles for simple visualization)
  const armholeDepth_cm = 20; // Standard armhole depth
  const armholeDepthPx = armholeDepth_cm * SCALE_FACTOR;
  
  const shoulder_y = -lengthPx/2 + armholeDepthPx; 
  const shoulder_x = widthPx/2;
  
  // Left Sleeve
  fill(170, 170, 220); 
  stroke(50);
  triangle(
    -shoulder_x, shoulder_y,                     // Inner Top Point
    -shoulder_x - sleevePx, shoulder_y + sleevePx/2, // Cuff Top Point
    -shoulder_x - sleevePx, shoulder_y - sleevePx/2  // Cuff Bottom Point
  );
  
  // Right Sleeve
  triangle(
    shoulder_x, shoulder_y,                      // Inner Top Point
    shoulder_x + sleevePx, shoulder_y + sleevePx/2,  // Cuff Top Point
    shoulder_x + sleevePx, shoulder_y - sleevePx/2   // Cuff Bottom Point
  );

  pop();
}

// Function to display the knitting calculation results
function displayCalculations(x, y) {
  const m = calculateKnittingMetrics();
  
  fill(50); // Dark gray text
  textAlign(LEFT, TOP);
  
  textSize(16);
  text('📏 Knitting Instructions (Front Panel)', x, y);
  y += 25;
  
  textSize(14);
  text(`Yarn Gauge: ${m.st_per_cm.toFixed(2)} sts/cm | ${m.row_per_cm.toFixed(2)} rows/cm`, x, y);
  y += 30;

  // Display Calculations
  textSize(18);
  
  // Body Cast On
  text(`Cast On (Body): ${m.bodyStitches} stitches`, x, y);
  y += 25;

  // Body Rows
  text(`Knit Body for: ${m.bodyRows} rows (${bodyLength} cm)`, x, y);
  y += 25;

  // Neck Bind Off
  text(`Neck Bind Off: ${m.neckStitches} stitches`, x, y);
  y += 25;
  
  // Sleeve Rows
  text(`Sleeve Length: Knit for ${m.sleeveRows} rows (${sleeveLength} cm)`, x, y);
}