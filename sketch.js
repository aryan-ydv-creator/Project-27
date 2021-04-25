
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar;
var ball1 , ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	
	
	Engine.run(engine);
	
	bar = new Bar(400,100,500,50)
	ball1 = new ball(250,height-200)
	rope1 = new rope(ball1.body,{x:250,y:100})
	
	ball2 = new ball(310,height-200)
	rope2 = new rope(ball2.body,{x:310,y:100})
	
	ball3= new ball(370,height-200)
	rope3 = new rope(ball3.body,{x:370,y:100})
	
	ball4 = new ball(430,height-200)
	rope4 = new rope(ball4.body,{x:430,y:100})
	
	ball5 = new ball(490,height-200)
	rope5 = new rope(ball5.body,{x:490,y:100})
	
}


function draw() {
	rectMode(CENTER);
	background("yellow")
	
	// drawSprites();
	// text(mouseX+","+mouseY,width-50,height-20)
	bar.display();
	
	ball1.display();
	rope1.display();
	
	ball2.display();
	rope2.display();
	
	ball3.display();
	rope3.display();
	
	ball4.display();
	rope4.display();
	
	ball5.display();
	rope5.display();
	
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
   
	   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-70,y:-70});
	//    ball1.position.x = rope1.position.x
	 }
	if (keyCode === RIGHT_ARROW) {
   
	   Matter.Body.applyForce(ball3.body,ball3.body.position,{x:70,y:-70});
	//    ball1.position.x = rope1.position.x
	 }
   }




