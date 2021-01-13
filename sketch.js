function setup()
{
  createCanvas(1200,800);
  fixedrect= createSprite(200,200,50,80);
  fixedrect.shapeColor  = "blue";
  fixedrect.debug       =  true;

  movingrect=createSprite(400,150,60,20);
  movingrect.shapeColor = "blue";
  movingrect.debug      =  true;

  gameobject1=createSprite(100,100,50,50);
  gameobject2=createSprite(200,100,50,50);
  gameobject3=createSprite(300,100,50,50);
  gameobject4=createSprite(400,100,50,50);

  gameobject1.shapeColor = "blue";
  gameobject2.shapeColor = "blue";
  gameobject3.shapeColor = "blue";
  gameobject4.shapeColor = "blue";

  movingrect.velocityY =   -5;
  fixedrect. velocityY =   +5;

}

function draw()
{
  background("black");

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

   if(isTouching(movingrect,gameobject1))
   {
    movingrect.shapeColor="red";
    gameobject1.shapeColor="red";
   }
   else
   {
    movingrect.shapeColor="green";
    gameobject1.shapeColor="green";
   }

  bounceoff(movingrect,fixedrect); 

   drawSprites();
}

