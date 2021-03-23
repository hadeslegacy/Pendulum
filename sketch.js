
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof
var bob1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400,100,350,40)

    bob1 = new bob (400,350,20)
	bob2 = new bob (380,350,20)
	bob3 = new bob (420,350,20)
	bob4 = new bob (440,350,20)
	bob5 = new bob (330,330,20)
	
  chain1 = new chain(bob1.body,{x:400,y:100})
  chain2 = new chain(bob2.body,{x:380,y:100})
  chain3 = new chain(bob3.body,{x:420,y:100})
  chain4 = new chain(bob4.body,{x:440,y:100})
  chain5 = new chain(bob5.body,{x:360,y:100})

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  //drawSprites();
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
}



