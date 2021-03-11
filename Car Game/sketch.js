const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var Carimage,car, Roadimage, Coneimage, Spikesimage, Personimage, Wallimage;


var road;

function preload(){
Roadimage=loadImage("Images/Road.png")
Carimage=loadImage("Images/Car.png");
Coneimage=loadImage("Images/cone.png")
Spikesimage=loadImage("Images/Spikes.png")
Personimage=loadImage("Images/Person.png")
Wallimage=loadImage("Images/Wall.png")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
 road= createSprite(500,250,width+100,550)
road.addImage("road",Roadimage);
road.scale=2;
road.velocityY=4;
road.y=road.height/2;

  
  engine = Engine.create();
    world = engine.world;
var Carprops={
  isStatic: true

}
  car=Bodies.rectangle(500,750,30,30,Carprops);
  World.add(this.world,car);

}


function draw()
{
  if(road.y > 500)
  {
    road.y=road.height/2;
  }
  Engine.update(engine);
//car.depth=road.depth;
//car.depth=car.depth+1;
  imageMode(CENTER)
  //image(Roadimage,500,250,width+100,550);
  drawSprites();
 // image(Coneimage,450,250,150,150);
  //image(//Spikesimage,150,250,150,150);
  //image(Personimage,650,250,150,150);
  //image(Wallimage,850,250,150,150);
  image(Carimage,car.position.x,car.position.y,150,150);

  

  if(keyDown("left"))
  {
    car.x=car.x-20;
  }

  if(keyDown("right"))
  {
    car.x=car.x+20;
  }

  if(keyDown("up"))
  {
    car.y=car.y+20;
  }

  if(keyDown("down"))
  {
    car.x=car.x-20;
  }

spawncones();
spawnspikes();
spawnperson();
spawnwall();
}




function spawncones()
{
  if (frameCount % 250 === 0) {
    var cone= createSprite(displayWidth,displayHeight,150,150)
    cone.y = random(280,320);
    cone.x = random(80,100);
    cone.addImage("cone",Coneimage)
    cone.scale = 0.3;
    cone.velocityY = 7;
    cone.depth=road.depth;
    cone.depth=cone.depth+1;
}
}

function spawnspikes()
{
  if (frameCount % 300 === 0) {
    var spikes= createSprite(150,displayHeight,150,150)
    spikes.y = random(280,320);
    spikes.x = random(80,1000);
    spikes.addImage("spikes",Spikesimage)
    spikes.scale = 0.3;
    spikes.velocityY = 7;
    spikes.depth=road.depth;
    spikes.depth=spikes.depth+1;
}
}
function spawnperson()
{
if (frameCount % 200 === 0) {
  var Person= createSprite(650,displayHeight,150,150)
  Person.y = random(280,320);
  Person.x = random(80,1000);
  Person.addImage("person",Personimage)
  Person.scale = 0.5;
  Person.velocityY = 7;
  Person.depth=road.depth;
  Person.depth=Person.depth+1;
}
}

function spawnwall()
{
  if (frameCount % 275 === 0) {
    var wall= createSprite(870,displayHeight,150,150)
    wall.y = random(280,320);
    wall.x = random(80,1000);
    wall.addImage("wall",Wallimage)
    wall.scale = 0.2;
    wall.velocityY = 7;
    wall.depth=road.depth;
    wall.depth=wall.depth+1;
}
}