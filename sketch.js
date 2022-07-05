//https://editor.p5js.org

let x;
let y;
let radius = 25;

let xSpeed;
let ySpeed;

function setup() {
  createCanvas(400, 400);
  x = width  /2;
  y = height /2;
  
  xSpeed = random(2, 5);
  ySpeed = random(2, 5);
  }

function draw() {
  background(220);
  fill(100, 123, 255);
  ellipse(x, y, radius * 2, radius * 2);
  
  x += xSpeed;
  y += ySpeed;
  
  if (x > width - radius || x < radius) {
    xSpeed = -xSpeed;
  }
  
  if(y > height - radius || y < radius) {
    ySpeed = -ySpeed;
  }
  
}
