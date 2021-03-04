const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hexagon;

function preload() {

}

function setup() {
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200 ,20);

    base1 = new Ground(390, 270, 250, 10);

    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    block16 = new Block(390, 155, 30, 40);

    hexagon = new Hexagon(120,250);
    slingshot = new SlingShot(hexagon.body,{x:100, y:250});
}
function draw() {
    background("white");
    Engine.update(engine);
    
    text("Drag the Hexagonal stone and release it, to launch it towards teh blocks", 100, 100);
    
    ground.display();
    base1.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    hexagon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
