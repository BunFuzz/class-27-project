const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(650, 350, 400 , 30)
bob1 = new Bob(340,480,39.6);
bob2 = new Bob(420,480,39.6);
bob3 = new Bob(500,480,39.6);
bob4 = new Bob(580,480,39.6);
bob5 = new Bob(660,480,39.6);
rope1 = new Rope(roof.body, bob1.body, -160, 0)
rope2 = new Rope(roof.body, bob2.body, -80,0)
rope3 = new Rope(roof.body, bob3.body,0,0)
rope4 = new Rope(roof.body, bob4.body,80,0)
rope5 = new Rope(roof.body, bob5.body,160,0)
	Engine.run(engine);
  

}


function draw() {
background("lightblue");
  console.log("bob1.position.x");

 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 textSize(20);
 fill ("black");
  text("left arrow for 1st ball right for 5th up for 2nd down for 4th",100,30);
 
}
function keyPressed (){
if (keyCode===LEFT_ARROW){
Body.applyForce(bob1.body,bob1.body.position, {x:-300 , y: -300} )

}
if (keyCode===UP_ARROW){
	Body.applyForce(bob2.body,bob2.body.position, {x:-300 , y: -300} )
	
	
}
	
if (keyCode===DOWN_ARROW){
		Body.applyForce(bob4.body,bob4.body.position, {x:300 , y: -300} )
}

if (keyCode ===RIGHT_ARROW){
	Body.applyForce(bob5.body,bob5.body.position, {x:300 , y: -300} )
}
}

