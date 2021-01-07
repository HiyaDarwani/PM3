
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyimg;

function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,40);
	greentree = new Tree(580, 480, 450, 450)
	//boy = new Boy(185, 630, 200, 240)
	greyStone = new Stone(90, 600, 20, 20)
	chain = new Chain(greyStone.body, {x:95, y:550})
	mango1 = new Mango(650, 350, 50, 50)
	mango2 = new Mango(600, 450, 50, 50)
	mango3 = new Mango(500, 450, 50, 50)
	mango4 = new Mango(550, 350, 50, 50)
	mango5 = new Mango(700, 450, 50, 50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 237, 255);
  image(boyimg, 50, 500, 200, 240)

  drawSprites();
 ground.display();
 greentree.display();
 //boy.display();
 greyStone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(greyStone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}


