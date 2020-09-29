const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

//a group of characters = string 
var x = "mithali"; 
var y = 1;
var z = true;

//2 more kinds of data 
var data = null;

var data1;

console.log(x);
console.log(y);
console.log(z);

console.log(data1);
console.log(data);


//arrays - group of data which might be similar or dissimilar

var arr = [1,2,3,4];

var arr1 = ["Mithali",1,true,5,"Shweta"];

console.log(arr);

console.log(arr1);

//length = 5
//last index = length - 1 = 4

console.log(arr[3]);
console.log(arr1[3]);

//arrays can also store arrays 
var array1 = [[1,2,3],["Mithali","Shweta"],[1,"Hi"]];
console.log(array1);
console.log(array1[1][0]);

//["Mithali","Shweta"] -> "Mithali"

//"hi"

console.log(array1[2][1]);


//3

console.log(array1[0][2]);





//1

console.log(array1[0][0]);


//"Shweta"

console.log(array1[1][1]);





//["Mithali","Shweta"]

console.log(array1[1]);


array1.push("Hellooooo");
console.log(array1);


array1.pop();
console.log(array1);

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState != "launched"){
     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}