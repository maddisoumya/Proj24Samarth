class dustbin{
    constructor(x,y,width,height){
        var option={
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.Body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;

        World.add(world,this.Body);
    }
    display(){
       
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("green")
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
};