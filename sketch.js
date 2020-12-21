function setup() {
  createCanvas(800, 200);
}

function draw() {
  frameRate(180);
  background(220, 230, 210);
  fill(186, 128, 274);
  ellipse(mouseX, mouseY, 80, 80);
  fill(86, 28, 74);
  text("Hold a Ball", 20, 40); 
}

