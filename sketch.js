//Create variables here

var dogimg1, dogimg2, dog;
var database, foodS, foodStock

function preload()
{
 dogimg1=loadImage("images/dogImg.png")
 dogimg2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000, 700);
  database=firebase.database();
  dog=createSprite(400,350,70,70)
  dog.addImage(dogimg1);
  dog.scale=0.35;
  foodobj=new Food();
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  feed=createButton("feed the dog")
  feed.position(700,95);
  feed.mousePressed(feedDog)
  addFood=createButton("add food")
  addFood.position(700,200)
  addFood.mousePressed(addFood);

}


function draw() {  
background("white");
foodobj.display();
  
feedTime=database.ref('FeedTime')

feedTime.on('value', function(data) {
  
  lastFeed=data.val();
})
  drawSprites();
  text("foodRemaining:"+foodS,200,200);
  //add styles here

}

function readStock(data)
{
  foodS=data.val()
  console.log(foodS)
  foodobj.updateFoodStock(foodS)
}

function feedDog()
{
dog.addImage(dogImg1)
foodobj.updateFoodStock(foodobj.getFoodStock()-1)
database.ref('/').update({
  Food:foodobj.getFoodStock(),
  FeedTime:hour()
})
}
function addFood()
{
foodS++;
database.ref('/').update({
Food:foodS
})
}