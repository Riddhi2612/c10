var ground ; 
var groundImg;
var ship;
var shipImg;
var invisibleSea;
var invisibleSeaImg;

function preload(){
groundImg=loadImage("sea.png")
shipImg=loadImage("ship-1.png")
invisibleSeaImg=loadImage("sea.png")
}

function setup(){
  createCanvas(2000,1000);
  ground=createSprite(200,500,250,7)
  ground.addImage("ground",groundImg)
  ship=createSprite(350,500,0,0)
  ship.addImage("ship",shipImg)
  ground.velocityX = -4;

}

function draw() {
  background("blue");
  drawSprites();
  if (ground.x<-100){
    ground.velocityX= 0
  }
 
}
