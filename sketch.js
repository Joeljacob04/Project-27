
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(400,100,200,10);
	World.add(world, Roof);

	bobObject1 = new Bob(400,300,25);
	bobObject2 = new Bob(450,300,25);
	bobObject3 = new Bob(500,300,25);
	bobObject4 = new Bob(550,300,25);
	bobObject5 = new Bob(600,300,25);

	rope1 = new Rope(bobObject1.body,roofObject.body,-100,0);

	rope2 = new Rope(bobObject2.body,roofObject.body,-50,0);

	rope3 = new Rope(bobObject3.body,roofObject.body,0,0);

	rope4 = new Rope(bobObject4.body,roofObject.body,+50,0);

	rope5 = new Rope(bobObject5.body,roofObject.body,+100,0);
	


	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
	}
}



