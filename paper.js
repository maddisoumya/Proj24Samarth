class paper{
    constructor(x,y,radius){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Body = Bodies.circle(x,y,radius,option);
        this.radius = radius;

        World.add(world,this.Body);
    }
   display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
   }
};