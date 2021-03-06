
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,100,400,30);
	
	bob1 = new Bob(500,300,50);
	bob2 = new Bob(550,300,50);
	bob3 = new Bob(600,300,50);
	bob4 = new Bob(650,300,50);
	bob5 = new Bob(700,300,50);

	rope1 = new Rope(bob1.body,roof.body,bob1*2,0);
	//rope2 = new Rope();
	//rope3 = new Rope();
	//rope4 = new Rope();
	//rope5 = new Rope();
	
}


function draw() {
  
  background(225);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
  
}



