const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    background(0)
    ground1 = new Ground(600,200,1200,20);
    box1 = new Box(350,100,50,50) 
    

}
function draw(){
ground1.display();
box1.display();
}
