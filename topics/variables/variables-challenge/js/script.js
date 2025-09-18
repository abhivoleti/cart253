/**
 * denver butter
 * edmond and abhi
 * 
 * mrfurious is super furious and bird going crazy
 */

"use strict";


let skyShade = {

  fill: {
    r: 4,
    g: 255,
    b: 255,
  }
}
/**
 * angry guy stops when bird shakes on top of him

 
*/




/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious

let mrFurious = {
  // Position and size
  x: 600,
  y: 600,
  size: 200,
  // Colour
  fill: {
    r: 152,
    g: 115,
    b: 90
  }
};

let drawBird = {
   x: 200,
  y: 200,
  size: 50,
  // Colour
  fill: {
    r: 53,
    g: 49,
    b: 49
  }
}


/**
 * Create the canvas
 */
function setup() {
  createCanvas(600, 600);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

  skyShade.fill.b = skyShade.fill.b-1
   skyShade.fill.g = skyShade.fill.g-1
  background(skyShade.fill.r,skyShade.fill.g,skyShade.fill.b);


  
  mrFurious.fill.r = mrFurious.fill.r+1
  mrFurious.fill.g = mrFurious.fill.g-1
  mrFurious.fill.b = mrFurious.fill.b-1


  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x/2, mrFurious.y/2, mrFurious.size);

  fill(255,255,255)
  ellipse(mrFurious.x/2.5, mrFurious.y/2, mrFurious.size/3)

  fill(255,255,255)
  ellipse(mrFurious.x/1.8, mrFurious.y/2, mrFurious.size/3)

  fill(0,0,0)
  ellipse(mrFurious.x/2.5, mrFurious.y/2, mrFurious.size/3.5)

  fill(0,0,0)
  ellipse(mrFurious.x/1.8, mrFurious.y/2, mrFurious.size/3.5)

  fill(255,255,255)
  rect(250,340,80,30)
  
  fill(0,0,0)
  rect(250,340,80,20)

drawBird.x =  drawBird.x+2
drawBird.y =  random(50,300)




if(drawBird.x < 700)
{
shake();
}

  pop();
  annoying()
}

function annoying() {
push();
  noStroke();
  fill(drawBird.fill.r, drawBird.fill.g, drawBird.fill.b);
  ellipse(drawBird.x/2, drawBird.y/2, drawBird.size*1.5);

    fill(53,49,49);
  ellipse(drawBird.x/2.2, drawBird.y/2.1, drawBird.size*2);

  fill(247,133,4);
  ellipse(drawBird.x/2.3, drawBird.y/2.2, 60,20)
  
  pop();

}

function shake() {
  mrFurious.x = random(580,600)
mrFurious.y = random(500,600)

}


