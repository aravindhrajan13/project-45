
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1520, 751);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	s400 = new S400(650,590);
	
	//ground = new Ground(500,725);
	ground=new Ground(width/2,720,width,20);

	;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX + ',' + mouseY, 10, 15);

       ground.display();
	  s400.display();
	 
	  if(keyWentUp(UP_ARROW)){
		s400.y=s400.y-20;
	   }
	   
	   if(keyDown(DOWN_ARROW)){
		s400.y=s400.y+20
	   }
  drawSprites();
 
} 


