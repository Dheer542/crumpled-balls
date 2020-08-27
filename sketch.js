
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(400,500,10);
	dustbin1 = new dustbin(400,650,200,20);
	dustbin2=new dustbin(500,610,20,100);
	dustbin3=new dustbin(300,610,20,100);
    ground1=new ground(400,610,800,10);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();
 
}



