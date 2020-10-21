var mr, fr
function setup() {

  createCanvas(1200,800);
  mr = createSprite(400, 200, 80, 50);
  fr = createSprite(400, 400, 50, 80);
  fr.shapeColor = "purple"
  mr.shapeColor = "blue"
  mr.velocityY = 4;
  fr.velocityY = -4;
}

function draw() {
  background("grey");
  //mr.x = World.mouseX
  //mr.y = World.mouseY

if(isTouching(mr,fr)){
  fr.shapeColor = "red"
  mr.shapeColor = "red"
}
else{
  fr.shapeColor = "purple"
  mr.shapeColor = "purple"
}

Bounce(mr,fr);

  drawSprites();
}
