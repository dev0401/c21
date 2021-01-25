function setup() {
   createCanvas(800,400);
    fixedRect=createSprite(300, 400, 50, 80);
   movingRect=createSprite(100,400,80,30); 
   fixedRect.shapeColor="green";
   movingRect.shapeColor="green"; 
   Car=createSprite(100,300,30,50);
   wall=createSprite(300,300,30,50); }

   function draw() { 
   background(255,255,255);
   
   movingRect.velocityX=2;
   Car.velocityX=2;
   console.log(movingRect.x-fixedRect.x); 
   
  bounceOff(movingRect,fixedRect);
  bounceOff(Car,wall);
 drawSprites(); }
