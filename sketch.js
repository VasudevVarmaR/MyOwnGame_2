const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,binImg;
var paperObject;
var ground;
var wall1,wall2,wall3;

function preload()
{
  bg = loadImage("bg.jpg");
  binImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 500)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,70);

	paperObject =new Paper(100,445,40);

	//rightSide
	wall1 = new Bin(725,420,20,98);

	//bottomSide 
	 wall2 = new Bin(685,460,68,20);
  
	//leftSide
	 wall3 = new Bin(657,420,20,98);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  ground.display();
  paperObject.display();
  wall1.display();
  wall2.display();
  wall3.display();
  imageMode(CENTER);
  image(binImg,692,420,100,100);
  
  drawSprites();
 
}



