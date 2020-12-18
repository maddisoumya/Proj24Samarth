const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	paper1 = new paper(100,680,10)

	ground1 = new ground();

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);  
  background(0);

  ground1.display();

 
}



