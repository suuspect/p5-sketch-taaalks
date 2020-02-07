size(100, 100, P3D);
PImage img = loadImage("1.png");
noStroke();
beginShape();
texture(img);
// "laDefense.jpg" is 100x100 pixels in size so
// the values 0 and 100 are used for the
// parameters "u" and "v" to map it directly
// to the vertex points
vertex(10, 20, 0, 0);
vertex(80, 5, 100, 0);
vertex(95, 90, 100, 100);
vertex(40, 95, 0, 100);
endShape();