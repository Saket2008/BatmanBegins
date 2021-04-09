class Raindrop
{
    constructor(x, y, radius)
    {
        var options = 
        {
            restitution: 0.00001,
            friction: 0.1
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        var angle = PI/random(1, 180);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.radius - 2, this.radius);
        pop();

        if(this.body.position.y > 600)
        {
            Matter.Body.setPosition(this.body, {x: random(0, 500), y: random(-20, 0)});
        }
    }
}