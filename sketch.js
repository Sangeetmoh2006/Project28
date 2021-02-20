
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000, 150, 30);
	mango3 = new Mango(1200, 160, 30)
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stone1 = new Stone(240, 360, 20);
	throw1 = new Throw(stone1.body,{x:240,y:400})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	groundObject.display();
	stone1.display();
	throw1.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	throw1.fly();
}