let img;
function preload() {
  img = loadImage('https://img-new.cgtrader.com/items/48242/61d432ec48/terrain-3d-model-max-obj-mtl-fbx.jpg');
}

var cols, rows;
var scl = 20;
var w = 100;
var h = 5000;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(1000, 1000, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}


function draw() {

  push();
  flying -= 0.01;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 2000);
      xoff += 0.2;
    }
    yoff += 0.01;
  }

  background(0, 0, 0);
  translate(0, 50);
  rotateY(PI / 2);
  translate(-w / 4, -h / 4);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    textureMode (IMAGE);
    texture(img);
    textureWrap(CLAMP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }

    endShape();
  }
  pop();
}
