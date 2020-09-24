var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds,cloudsgroup;
var obstaclegroup,o1,o2,o3,o4,o5,o6;
var score


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  clouds=loadImage("cloud.png");
  
  o1=loadImage("obstacle1.png");
  o2=loadImage("obstacle2.png"); 
  o3=loadImage("obstacle3.png");
  o4=loadImage("obstacle4.png");
  o5=loadImage("obstacle5.png");
  o6=loadImage("obstacle6.png");
    
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);     
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsgroup=new Group();
  obstaclegroup=new Group();
  
  score=0;
  
  
}

function draw() {
  background(180);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnClouds();
spawnObstacles();
 
  score=score+Math.round(getFrameRate()/60);
  text("score: "+score,500,50);
  
  
  
  
  
  
  
  
  
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(clouds);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudsgroup.add(cloud);
  }
  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage(o1);
        break;    
          case 2:obstacle.addImage(o2);
        break;    
          case 3:obstacle.addImage(o3);
        break;    
          case 4:obstacle.addImage(o4);
        break;    
          case 5:obstacle.addImage(o5);
        break;    
          case 6:obstacle.addImage(o6);
        break;    
        default:break;
        
        
        
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclegroup.add(obstacle);
  }
}










