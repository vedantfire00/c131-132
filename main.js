img = "";


function preload(){
  img = loadImage('dole-produce-fruit-medley.png');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}





function draw(){ 
  image(img, 0, 0, 640, 420);
  fill("#f7f700");
  text("pineapple", 150, 150);
  noFill();
  stroke("#FF0000");
  rect(130, 120, 250, 150 );

  fill("#f7f700");
  text("banana", 350, 100);
  noFill();
  stroke("#FF0000");
  rect(320, 80, 160, 200);

  fill("#f7f700");
  text("berries", 215, 225);
  noFill();
  stroke("#FF0000");
  rect(210, 210, 175, 100);
  
}


