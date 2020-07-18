const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rocket;
var engine, world;
var bg;
var position;
var obstacle;
var obstacleGroup, obstacle_image;



function preload(){
  bg = loadImage("./images/background.png");
  obstacle_image = loadImage("./images/meteroid.png");
 
}

function setup() {
  engine = Engine.create();
 world = engine.world;
 var canvas = createCanvas(600,600);
//var bg = createSprite(width/2, height/2, 50, 50);
 //bgImg.addImage("bgImg",bg);

 rocket = new Rocket(displayWidth/2,300);
 Matter.Body.setPosition (rocket.body , {x:300, y :550});
 obstaclesGroup = new Group();
 //obstacle = new Obstacle(displayWidth/4,200);
 
 
}

function draw() {
  background(bg);  
  
  if (rocket !== undefined){
    rocket.move();
    rocket.display();
    }
    if(frameCount%60===0){
      createObstacles();

    }

Engine.update(engine);
//obstacle.display();
drawSprites();
}
/*function changePosition(){
  rocket.body.position.x = rocket.body.position.x + x;
  rocket.body.position.y = rocket.body.position.y + y;
}
*/

function createObstacles(){
  var obstacle = createSprite(0,0,1,1);
  obstacle.x = Math.round(random(50,550));
  obstacle.y = Math.round(random(50,200));
  obstacle.addImage("obstacle",obstacle_image);
  obstacle.scale = 0.07;
  obstacle.velocityY = 5
  obstaclesGroup.add(obstacle);
  if(frameCount%500===0){
    obstacle.velocityY = obstacle.velocityY + 5;
  }
}



