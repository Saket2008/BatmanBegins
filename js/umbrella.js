class Umbrella
{
    constructor(x, y, radius)
    {
        var options = {
            isStatic: true,
            density: 0.01
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        imageMode(CENTER);
        image(animate, this.body.position.x, 510, 200, 200);
        fill("white");
        
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x + 50, this.body.position.y + 200, this.radius*2);

        if(frameCount % 50 === 0 && bat.x > 0)
        {
            Matter.Body.setPosition(this.body, {x: this.body.position.x + 10, y: this.body.position.y});
        }
    }
}