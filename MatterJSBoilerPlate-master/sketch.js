
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pt,bgImg ;
var player,coins;
function preload()
{
background1=loadImage("land.png")
land=loadImage("texture_21.png")
bee=loadImage("ghost.png")
ring=loadImage("portal_orange.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
pt=createSprite(40,600,270,20)
player=createSprite(50,550,20,100)
player.addImage(bee)

pt2=createSprite(550,530,600,20)
pt3=createSprite(350,410,400,20)
pt4=createSprite(250,300,500,20)
pt5=createSprite(72,150,270,20)
pt5=createSprite(580,200,200,20)

//coins
fill("pink")
coins = createSprite(207,268,20,20);

coins2 = createSprite(700,500,20,20)
coins3 = createSprite(390,499,20,20);
coins4 = createSprite(532,499,20,20);
coins5 = createSprite(491,379,20,20);
coins6 = createSprite(390,267,20,20);
coins7= createSprite(577,174,20,20);
coins8 = createSprite(301,378,20,20);


portal=createSprite(99,120,20,20)
portal.addImage(ring)
portal.scale=0.5


	engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.

	Engine.run(engine);
	bgImg = background1;
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  drawSprites();
 
}



