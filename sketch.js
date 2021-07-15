
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic : false,
		restitution: 0.8,
		friction : 0,
        density : 1.2
	  }
	//Create the Bodies Here.

	ball = Bodies.circle(250,50,10,ball_options);
	World.add(world,ball);

	ground1 = new Ground(500,670,1000,20);
	ground2 = new Ground(560,635,10,50);
	ground3 = new Ground(620,635,10,50);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x,ball.position.y,10);

  ground1.show();
  ground2.show();
  ground3.show();

  drawSprites();
 
}


function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}