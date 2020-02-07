let img;
function preload() {
  img = loadImage('http://3.bp.blogspot.com/-yvHXo7HtHDE/UATxfDGF1BI/AAAAAAAAFFM/hFE4J9QtiYQ/s1600/Landscape.jpg');
}

function setup() {
  createCanvas(200, 200, WEBGL);
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

  background(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(img);
  translate(0, 50);
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    texture(img);
    textureWrap(CLAMP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }

    endShape();
  }
}