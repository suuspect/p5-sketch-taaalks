let img;
function preload() {
  img = loadImage('http://3.bp.blogspot.com/-yvHXo7HtHDE/UATxfDGF1BI/AAAAAAAAFFM/hFE4J9QtiYQ/s1600/Landscape.jpg');
}

var cols, rows;
var scl = 20;
var w = 100;
var h = 5000;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
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
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 500);
      xoff += 0.2;
    }
    yoff += 0.1;
  
  
  }
  background(0, 0, 0);
  translate(0, 50);
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    texture(img);
    textureWrap(REPEAT);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }

    endShape();
  }
}
