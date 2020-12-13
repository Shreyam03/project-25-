class Paper{
    constructor()
    {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:.5,
        density:1.2,
    }
    this.body=Bodies.circle(40,600,20,options);
    this.radius=20;
    this.image=loadImage("sprites/paper.png");
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
    }
}