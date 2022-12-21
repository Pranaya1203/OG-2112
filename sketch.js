var gameState= "start";
var bg;
var Obstacle1 , Obstacle2 , Obstacle3 ;
var score = 300;
var backgroundImg;
var ground;
var penguin;
var ObstacleImg1, ObstacleImg2,  ObstacleImg3;
var penguin_walking, penguin_collided;
var Obstacle1grp;
var Obstacle2grp;

function preload(){
  penguin_walking = loadAnimation("P1.png","P3.png","P2.png","P3.png");
  penguin_collided = loadAnimation("P5.png");
  ObstacleImg1 = loadImage("Obstacle1.png");
  ObstacleImg2 = loadImage("Obstacle2.png");
  ObstacleImg3 = loadImage("Obstacle3.png");
  backgroundImg = loadImage("Antarctica.jpg");

}

function setup(){
 createCanvas(windowWidth,windowHeight);

 bg=createSprite(0,0);
  bg.addImage("Image",backgroundImg);
  bg.scale = 2.5;
 bg.x = width/2 ;
  bg.velocityX = -5;
 

 penguin = createSprite(50,height-52,20,20);
 penguin.addAnimation("walking",penguin_walking);
 penguin.addAnimation("collided",penguin_collided);
 penguin.scale = 0.5;


 

 ground = createSprite(width/2,height-50,width*2,5);
 ground.velocityX = -1;
  ground.x = width/2 ;
  ground.visible = false;

  Obstacle1grp = createGroup();
  Obstacle2grp = createGroup();
              


}

function draw(){
background("lavender");
penguin.collide(ground);
if (ground.x<0) {
  ground.x= ground.width/2
}

if (bg.x<0) {
  bg.x= bg.width/2
}


penguin.collide(ground);



spawnObstacle1() 

if (Obstacle1grp.isTouching(penguin)) {
  penguin.destroy();
  
}

if (keyDown("UP_ARROW")) {
  penguin.velocityY = -5;
}

penguin.velocityY = penguin.velocityY + 0.1;

spawnObstacle2();

if(Obstacle2grp.isTouching(penguin)) {
  penguin.changeAnimation("collided")

}


drawSprites();

}

function spawnObstacle1() {
 if(frameCount % 150 === 0 && score>=300) 
  {
   Obstacle1 = createSprite(450,height-125,20,20)
  Obstacle1.addImage("Image",ObstacleImg1)
  Obstacle1.scale = 0.2225;
  Obstacle1.velocityX = -5;
  Obstacle1.debug = true;
  Obstacle1.setCollider("circle",0,0,5);
   Obstacle1grp.add (Obstacle1);
  }
   }

function spawnObstacle2() {
  if(frameCount % 180 === 0 && score>=600) 
  {
   Obstacle2 = createSprite(450,height-225,20,20)
  Obstacle2.addImage("Image",ObstacleImg2)
  Obstacle2.scale = 0.2225;
  Obstacle2.velocityX = -5;
  Obstacle2.debug = true;
  Obstacle2.setCollider("circle",0,0,5);
   Obstacle2grp.add (Obstacle2);
  }
  

 }



