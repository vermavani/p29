class Polygon{
    constructor(x, y, width, height) {
        var options = {
            isStatic:True,
            restitution:1,
            friction:0.7,
            density:0.8
        
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
       push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
        pop();
      }
}