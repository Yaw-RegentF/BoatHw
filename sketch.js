var ship, ship_sailing;
var seabacgrd,sea_Image;

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
  sea_Image = loadImage("sea.png")
}

function setup(){
  createCanvas(1400,700);
 
 seabacgrd = createSprite(100,190,0,0)
 seabacgrd.addImage("seabacgrd", sea_Image);
 seabacgrd.velocityX = -5;

 ship = createSprite(160,320,20,70);
 ship.addAnimation("running", ship_sailing);
 ship.scale = 0.35
}

function draw() {
background("blue")
 
  if (seabacgrd.x <0) {
    seabacgrd.x = seabacgrd.width / 2;
  }

  drawSprites();
}