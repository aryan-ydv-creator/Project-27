class ball{
    constructor(x,y){
        var options ={
            restitution:1.2,
            density:1.6
            
        }
        this.body = Bodies.circle(x,y,30,options);
        this.width = width;
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var y = this.body.position.y;
        var x = this.body.position.x;
        fill("purple")
        ellipseMode(RADIUS);
        ellipse(x,y,30,30)
    }
}