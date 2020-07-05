var call,wall;
var weight,height;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(20,90);
  weight=random(400,1500);

}

function draw() {
  background("black");  
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  { 
    car.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/22500
    if(deformation>180){
      wall.shapeColor=color(255,0,0);
    }
  else if(deformation<180 && deformation>100){
      wall.shapeColor=color(230,230,0);
    }
   else  if(deformation<100){
      wall.shapeColor=color(0,255,0);
    }
  }
  car.velocityX=speed;
  
  drawSprites();
}