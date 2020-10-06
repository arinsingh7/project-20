var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55, 90);
  weight=(400, 1500);
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  
  //give your car a colour

  wall = createSprite(1500, 200, 60, height/2);
  
  //give your wall a colour


}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180) {
      
      //WRITE THE RGB CODES FOR COLOURS
      //car.shapeColor=color(255,0,0);
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100) {
      
      //car.shapeColor=color(230,230,0);
      car.shapeColor = "blue";
    }
    if(deformation<100) {
      
      //car.shapeColor=color(0,255,0);
      car.shapeColor = "green";
    }





  }

  drawSprites();
}
