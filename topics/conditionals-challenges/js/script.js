/**
 * brooklyn bricks
 * Abhinav Voleti
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */


const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined,
  y: undefined,
  size: 75,
  fill: "#000000"
};

const target = {
  x: 300,
  y: 100,
  w: 80,
  h: 230,
  fill: "#7b0000ff"
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#aaaaaa");
  moveUser();
  overlap();
  drawTarget();
  drawUser();
  drawPuck();
}

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function overlap() {
  const d = dist(user.x, user.y, puck.x, puck.y);
  const o = d < user.size / 2 + puck.size / 2;

  if (o) {
    let dx = puck.x - user.x;
    let dy = puck.y - user.y;
    puck.x += dx * 0.05;
    puck.y += dy * 0.05;

    const r = puck.size / 2;
    puck.x = constrain(puck.x, r, width - r);
    puck.y = constrain(puck.y, r, height - r);
  }

  const closepointx = constrain(puck.x, target.x, target.x + target.w);
  const closepointy = constrain(puck.y, target.y, target.y + target.h);
  const distbwrect = dist(puck.x, puck.y, closepointx, closepointy);
  const touchRect = distbwrect < puck.size / 2;

  target.fill = touchRect ? "#00ff00" : "#7b0000ff";
}

function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  rect(target.x, target.y, target.w, target.h);
  pop();
}
