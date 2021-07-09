const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var tower;
var cannon;
var BGImg;

function preload(){
    BGImg = loadImage("background.gif")
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590,1200,20)

    tower = new Tower(150,350,160,310)

    cannon = new Cannon(180,110,110,50,-PI/4)

    
}

function draw(){
    background(0);
    Engine.update(engine);

    image(BGImg,0,0,width,height)

    
    ground.display()
    tower.display()
    cannon.display()
}
