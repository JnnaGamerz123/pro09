var sea,ship;
var seaImg,shipImg;

function preload(){
  

  shipImg = loadAnimation("ship-1.png","ship-2.png");
 
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;
ship=createSprite(130,190,50,50)
ship.addAnimation("run",shipImg)
ship.scale=0.25
  
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if(sea.x < 0){
    sea.x = 0;

    sea.x = sea.width;
    sea.x = sea.width/8;
  
  }

 
  drawSprites();
}