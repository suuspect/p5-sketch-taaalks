let img;
function preload() {
  img = loadImage('http://3.bp.blogspot.com/-yvHXo7HtHDE/UATxfDGF1BI/AAAAAAAAFFM/hFE4J9QtiYQ/s1600/Landscape.jpg');
}

function setup() {
  createCanvas(200, 200, WEBGL);
}

function draw() {
  background(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(img);
  box(200, 200, 200);
}