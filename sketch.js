const Engine =Matter.Engine;
const World  =Matter.World;
const Bodies =Matter.Bodies;
var engine,world;
var ground,ball; 

 function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world =engine.world;
  ground = Bodies.rectangle(200,200,50,50);
  
  World.add(world,ground)
  
  createSprite(400, 200, 50, 50);
}

 function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,20);
  
  
  
  
  drawSprites();
}