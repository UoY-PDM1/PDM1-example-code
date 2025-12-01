/**
 * This is the final version, with three identified issues corrected through 
 * a conversation with Gemini. You can see the full transcript in the PDF in 
 * this folder.
 */

// Paddle variables
let paddleWidth = 15;
let paddleHeight = 80;
let paddleX;
let paddleY;

// Ball variables
let ballX;
let ballY;
let ballDiameter = 20;
let ballXSpeed;
let ballYSpeed;

function setup() {
  createCanvas(600, 400);

  // Set initial paddle position
  paddleX = 50;
  paddleY = height / 2 - paddleHeight / 2;

  // Set initial ball position and speed
  resetBall();
}

function draw() {
  background(0);

  // Draw the paddle
  fill(255);
  rect(paddleX, paddleY, paddleWidth, paddleHeight);

  // Draw the ball
  ellipse(ballX, ballY, ballDiameter);

  // Move the paddle with 'w' and 's' keys
  movePaddle();

  // Move the ball
  ballX += ballXSpeed;
  ballY += ballYSpeed;

  // Check for collision with top and bottom walls
  if (ballY < 0 || ballY > height) {
    ballYSpeed *= -1;
  }

  // Check for collision with right wall (miss)
  if (ballX > width) {
    missBall();
  }

  // Check for collision with left wall (player's side)
  if (ballX < 0) {
    // This part ensures the ball stays in play if it hits the back wall on the player's side
    ballX = 0;
    ballXSpeed *= -1;
  }
  
  // Check for collision with the paddle
  if (
      ballX + ballDiameter / 2 >= paddleX && // Check if the ball's right edge is past the paddle's left edge
      ballX - ballDiameter / 2 <= paddleX + paddleWidth && // Check if the ball's left edge is past the paddle's right edge
      ballY + ballDiameter / 2 >= paddleY && // Check if the ball's bottom edge is past the paddle's top edge
      ballY - ballDiameter / 2 <= paddleY + paddleHeight // Check if the ball's top edge is past the paddle's bottom edge
  ) {
      hitBall();
  }
}

function movePaddle() {
  // 'w' key moves the paddle up
  if (keyIsDown(87)) {
    paddleY -= 5;
  }
  // 's' key moves the paddle down
  if (keyIsDown(83)) {
    paddleY += 5;
  }
  // Prevent paddle from going off-screen
  paddleY = constrain(paddleY, 0, height - paddleHeight);
}

function hitBall() {
  // Reverse ball's horizontal direction and speed it up slightly
  ballXSpeed *= -1.05;

  // Grow the paddle
  paddleHeight += 5;
  
}

function missBall() {
  // Shrink the paddle
  paddleHeight -= 2;
  // Increase the ball's speed
  if (ballXSpeed > 0) {
      ballXSpeed += 1;
  } else {
      ballXSpeed -= 1;
  }

  // Make sure the paddle doesn't get too small
  if (paddleHeight < 10) {
    paddleHeight = 10;
  }

  // Reset ball position
  resetBall();
}

function resetBall() {
  ballX = width;
  ballY = height / 2;
  ballXSpeed = 4;
  ballYSpeed = 4;
  
  // Randomize initial direction of the ball
  if (random(1) > 0.5) {
      ballXSpeed *= -1;
  }
  if (random(1) > 0.5) {
      ballYSpeed *= -1;
  }
}