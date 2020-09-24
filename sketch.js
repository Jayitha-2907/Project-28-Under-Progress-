
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, stone, boy, launcher;
var mango1, mango2, mang03, mango4, mango5, mango6, mango7, mango8;
var boyImg;


function preload(){

boyImg = loadImage("Plucking+mangoes/boy.png");

treeImg = loadImage("Plucking+mangoes/tree.png");

}


function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//tree
	tree = createSprite(750, 470);
	tree.addImage(treeImg);
	tree.scale = 0.4;

	//ground
	ground = new Ground(500, 690, 1000, 20);
	
	//boy
    boy = createSprite(140, 640, 20, 20);
	boy.addImage(boyImg);
	boy.scale = 0.1;	

	//stone
	stone = new Stone(90, 580, 40);

	//mango
	mango1 = new Mango(755, 430, 40);
	mango2 = new Mango(600, 420, 45);
	mango3 = new Mango(900, 400, 55);
	mango4 = new Mango(690, 380, 40);
	mango5 = new Mango(890, 340, 42);
	mango6 = new Mango(687, 290, 40);
	mango7 = new Mango(770, 300, 50);
	mango8 = new Mango(800, 380, 45);

	launcher = new Launcher(stone.body,{x:90,y:565});
	
	
	keyPressed();

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();

  launcher.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);


  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();

}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}




function detectcollision(stone,mango) {
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   
  if (distance <= mango.radius + stone.radius) {
     Matter.Body.setStatic(mango.body,false);
   }
}
       

	   
  function keyPressed() {
	if(keyCode === 32) {

	Matter.Body.setPosition(stone.body, {x: 200, y: 200});
	  launcher.attach(stone.body);
	}
  
}  

