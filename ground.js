class ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.Body = Bodies.rectangle(400,690,1200,10);
        this.width = 1200;
        this.height =10;

        World.add(world,this.Body);
    }
   display(){
    rectMode(CENTER);
   }
};