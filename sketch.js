
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var ground
var END
var PLAY
var backgroundImage,bg

function preload(){
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
 
  backgroundImage = loadImage("jungle.jpg");
}



function setup() {
  createCanvas(600,600);

  monkey=createSprite(50,200,10,10);
  monkey.addAnimation("MONKEY",monkey_running);
  monkey.scale=0.13
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
  ground=createSprite(300,600,1200,300);
  ground.scale=0.5
  
  bg=createSprite(300,300,600,600);
  bg.addImage(backgroundImage);
  bg.velocityX=-2
  bg.scale=2.5;
  bg.depth=monkey.depth-1;
}


function draw() {
background("white");  
  
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  
  survivalTime=Math.round(frameCount/frameRate());
  
  ground.visible=false;
  
if(keyDown("space")){
  monkey.velocityY=-3;
}
    if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
      monkey.scale=0.17; 
   }
    
   monkey.velocityY=monkey.velocityY+0.1
  
  monkey.collide(ground);

  spawnObstacles();
  spawnBananas();
  
 
  if(monkey.isTouching(obstacleGroup)){
monkey.scale=0.1;
  }

drawSprites();
  fill("white");
  textSize(18)
text("Survival Time:"+survivalTime,250,50)
}

function spawnBananas(){
 if(frameCount%160==0){
    banana=createSprite(600,300,10,10);
    banana.addImage(bananaImage);
   banana.scale=0.1
   banana.velocityX=-3
    banana.lifetime=600;
    banana.y=Math.round(random(300,500));
    bananaGroup.add(banana);
}
} 


function spawnObstacles(){
   if(frameCount%200==0){
    obstacle=createSprite(600,500,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-3;
    obstacle.lifetime=600;
    obstacle.x=Math.round(random(600,500));
    obstacleGroup.add(obstacle);
    monkey.depth=obstacle.depth
    monkey.depth=monkey.depth+1
  
  }
}




