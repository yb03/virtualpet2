class Food
{
constructor()
{
    this.foodStock=0
    this.lastFed=0
    this.image=loadImage('images/Milk.png')
}
updateFoodStock(foodStock)
{
    this.foodStock=foodStock
}
getFeedTime(lastFed)
{
    this.lastFed=lastFed
}
deductFood(){
    if(this.foodStock>0)
    {
        this.foodStock=this.foodStock-1
    }
}
getFoodStock()
{
    this.foodStock;

}
display(){
    var x=100
    var y=100
    image(this.image, 700,200, 50,50)
    if(this.foodStock!=0){
        for (var index = 0; index < this.foodStock; index++) {
            if (index%10==0){
                x=80
                y=y+50
            }
            image(this.image,x,y,50,50)
            x=x+30
        }
    }
}
}
