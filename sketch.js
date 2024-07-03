//The setup function only happens once
var diam1=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	background(100,150,235);
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(164,244,248); // an RGB color for the circle's border
  strokeWeight(3);
  fill(75,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,100,diam1,diam1);
  // center of canvas, 20px dia
  fill(241,12,119,mouseX);
  stroke(113,75,93);
  ellipse(100,400,mouseY,40);
  rect(random(width),random(height),50,50) 
  fill(130);
  textFont('Helvetica');
  textSize(30);
  textStyle(ITALIC);
  text('Hello',250,250);
  fill(255);
  noStroke(0);
  ellipse(mouseX,mouseY,30,30);

}

function mousePressed(){
	if (diam1>=100){
	diam1=0;
}else{
	diam1=diam1+2; 
}
}