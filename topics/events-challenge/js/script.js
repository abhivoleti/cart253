/**
 * The Only Move Is Not To Play
 * Abhinav Voleti
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);

  window.addEventListener("mousePressed", (event)   => {
    gameOver = true;
  });
  window.addEventListener("keyPressed", (event) => {
    gameOver = true;
  });
  window.addEventListener("mouseReleased", (event) => {
    gameOver = true;
  });
  window.addEventListener("mouseWheel", (event) => {
    gameOver = true;
  });   
  window.addEventListener("mouseMoved", (event) => {
    gameOver = true;
  });   

  window.addEventListener('offline', (event) => {
    gameOver = true;
  });
  
  window.addEventListener('online', (event) => {
    gameOver = true;
  });

  document.addEventListener('visibilitychange', () =>{
    if (document.hidden){
      gameOver=true;

    }
    });
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

function keyPressed() {
    lose();
}

function mousePressed() {
    lose();
}

function keyReleased() {
    lose();
}

function mouseMoved() {
    lose();
}

function lose() {
    gameOver = true
}

