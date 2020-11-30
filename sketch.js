
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,box1,box2,box3,ground1;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new ground(400,600,2000,20);
	paperBall = new paper(100,200);
	box1 = new dustbin(880,580,160,20);
	box2 = new dustbin(805,540,20,100);
	box3 = new dustbin(960,540,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  //display bodies
  ground1.display();
  paperBall.display();
  box1.display();
  box2.display();
  box3.display();
  
  keyPressed(); 
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		//isStatic:false,
		// 	pos=paperBall.body.position;
		Matter.Body.applyForce(paperBall.body,paperBall.position,{x:85,y:-85}); 		
	}
}



