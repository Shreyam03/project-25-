const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,baseSprite,side1Sprite,side2Sprite,base,side1,side2,image1;
function preload()
{
	image1=loadImage('sprites/dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  //baseSprite=createSprite(700,660,150,20);
  //baseSprite.shapeColor="white";
  //side1Sprite=createSprite(620,600,20,100);
  //side1Sprite.shapeColor="white";
  //side2Sprite=createSprite(780,600,20,100);
  //side2Sprite.shapeColor="white";

	//Create the Bodies Here.
    paper=new Paper();
    ground=new Ground();
    base=Bodies.rectangle(700,660,150,20,{isStatic:true});
    World.add(world,base);
    side1=Bodies.rectangle(620,600,20,100,{isStatic:true});
    World.add(world,side1);
    side2=Bodies.rectangle(780,600,20,100,{isStatic:true});
    World.add(world,side2);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  paper.display();
  ground.display();
  image(image1,700,600,165,165)
  drawSprites();
 
  
  console.log(paper.body.position.x,paper.body.position.y);
}
function keyPressed(){
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-85})
  }
}



