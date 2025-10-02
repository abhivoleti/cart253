
let starX, starY;
let starSpeedX = 9;
let starSpeedY = 2;

function setup() {
  createCanvas(480, 480);
  background(0);

  // shooting star pos
  starX = 50;
  starY = 80;
}

function draw() {
  background(0);

  // moon
  fill(250, 250, 200);
  ellipse(360, 100, 80, 80);

  // stars
  fill(255);
  noStroke();
  ellipse(100, 50, 3, 3);
  ellipse(200, 120, 3, 3);
  ellipse(300, 60, 3, 3);
  ellipse(400, 150, 3, 3);
  ellipse(50, 180, 3, 3);
  ellipse(150, 80, 3, 3);
  ellipse(250, 40, 3, 3);
  ellipse(350, 180, 3, 3);
  ellipse(420, 90, 3, 3);
  ellipse(75, 100, 3, 3);
  ellipse(180, 160, 3, 3);
  ellipse(280, 140, 3, 3);
  ellipse(380, 50, 3, 3);
  ellipse(320, 110, 3, 3);

  // ground
  fill(20, 60, 20);
  ellipse(240, 460, 560, 240);

  

  // body
  fill(200,);
  rect(187, 399, 114, 110);
  rect(270, 320, 20, 70);

  // person
  fill(200);
  // head
  triangle(187, 400, 301, 399, 247, 300);

  fill(0);
  ellipse(220, 430, 29, 18);

  fill(255, 192, 203);
  ellipse(220, 430, 15, 18);

  fill(0);
  ellipse(270, 430, 29, 18);

  fill(255, 192, 203);
  ellipse(270, 430, 15, 18);


  // ufo
  fill(255);
  ellipse(mouseX, mouseY, 70, 10);

  fill(255);
  ellipse(mouseX, mouseY-5, 45, 20);

  // shooting star
  fill(267);
  ellipse(starX, starY, 12, 2);

  starX += starSpeedX;
  starY += starSpeedY;

  if (starX > width || starY > height) {
    starSpeedX = -starSpeedX;
    starSpeedY = -starSpeedY;
  }

  if (starSpeedX < 0 && (starX <0 || starY <0)) {
    starSpeedX = 0;
    starSpeedY = 0;
    starX = -100;
    starY
  }
}
