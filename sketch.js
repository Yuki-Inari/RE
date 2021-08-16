var astronaut

var BG,BGImg
var sleep,sleepImg
var eat,eatImg
var drink,drinkImg
var gym,gymImg
var bath,bathImg
var move,moveImg
var brush,brushImg

function preload(){
  BGImg = loadImage ("iss.png");
  bathImg = loadImage ("bath1.png","bath2.png");
  brushImg= loadImage ("brush.png");
  drinkImg= loadImage ("drink1.png","drink2.png");
  eatImg= loadImage ("eat1.png","eat2.png");
  gymImg= loadImage ("gym1.png","gym2.png","gym11.png","gym12.png");
  moveImg= loadImage ("move.png","move1.png");
  sleepImg= loadImage ("sleep.png");
}
function setup() {
  createCanvas(800,400);
  BG = createSprite(300,300);
  BG.addImage("bg",BGImg);
  
  astronaut =  createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1
}

  createEdgeSprites();


function draw() {
  background(255,255,255); 
  textSize(20);
  text("Instructions:",20,35);
  textSize(15);

  text("Up Arrow = brushing",20,55);
  text("Down Arrow = gyming",20,70);
  text("Left Arrow = Eating",20,85);
  text("Right Arrow = Bathing",20,100);
  text("M key = Moving",20,115);

  astronaut.bounceOff(leftEdge);
  astronaut.bounceOff(rightEdge);
  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(bottomEdge);

  if(keyDown("up_arrow")){
    astronaut.addAnimation ("brushing",brush) 
    astronaut.changeAnimation("brushing") 
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("down_arrow")){
    astronaut.addAnimation ("gyming",gym) 
    astronaut.changeAnimation("gyming") 
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  
  if(keyDown("left_arrow")){
    astronaut.addAnimation ("Eating",eat) 
    astronaut.changeAnimation("Eating") 
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  
  if(keyDown("right_arrow")){
    astronaut.addAnimation ("Bathing",bath) 
    astronaut.changeAnimation("Bathing") 
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
 
  if(keyDown("m")){
    astronaut.addAnimation ("moveing",move) 
    astronaut.changeAnimation("moveing") 
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;


  drawSprites();
  }
}