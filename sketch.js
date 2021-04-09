const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var umbrellaMan;
var thunder, thunderImg, bat, batAni;
var rand = 0;
var animate;
var choose = 0;

function preload()
{
    animate = loadImage("Walking Frame/walking_1.png");
    batAni = loadAnimation("images/bat1.png", "images/bat2.png", "images/bat3.png", "images/bat4.png", "images/bat5.png", "images/bat6.png", "images/bat7.png", "images/bat8.png", "images/bat9.png");
}

function setup()
{   
    var canvas = createCanvas(500, 600);
    engine = Engine.create();
    world = engine.world;

    thunder = createSprite(250, 100);
    thunder.shapeColor = "black";
    thunder.scale = 0.3;
    
    for(var d = 0; d < 201; d++)
    {
        drops.push(new Raindrop(random(0, 500), random(0, 600), 5)); 
    }

    bat = createSprite(1000, 300);
    bat.addAnimation("fly", batAni);
    bat.scale = 0.2;
    bat.velocityX = -1;

    umbrellaMan = new Umbrella(50, 230, 0);
}

function draw()
{
    background("black");
    Engine.update(engine);

    for(var a = 0; a < drops.length; a++)
    {
        drops[a].display();
    }

    if(frameCount % 50 === 0 && bat.x > -60)
    {
        switch(choose){
        case 0: animate = loadImage("Walking Frame/walking_8.png");
        break;
        case 1: animate = loadImage("Walking Frame/walking_7.png");
        break;
        case 2: animate = loadImage("Walking Frame/walking_6.png");
        break;
        case 3: animate = loadImage("Walking Frame/walking_5.png");
        break;
        case 4: animate = loadImage("Walking Frame/walking_4.png");
        break;
        case 5: animate = loadImage("Walking Frame/walking_3.png");
        break;
        case 6: animate = loadImage("Walking Frame/walking_2.png");
        break;
        case 7: animate = loadImage("Walking Frame/walking_1.png");
        break;
        case 8: animate = loadImage("images/Batman.png");
        break;
        default: animate = loadImage("Walking Frame/walking_1.png");
        }

        if(choose < 7)
        {
            choose++;
        }
        else
        {
            choose = 0;
        }
    }
    
    if(bat.x < 0)
    {
        choose = 8
    }

    if(frameCount % 70 === 0)
    {
        thunder.x = random(50, 450);
        
        rand = Math.round(random(1, 4));

        switch(rand)
        {
            case 1: thunderImg = loadImage("thunderbolt/1.png");
            break;
            case 2: thunderImg = loadImage("thunderbolt/2.png");
            break;
            case 3: thunderImg = loadImage("thunderbolt/3.png");
            break;
            case 4: thunderImg = loadImage("thunderbolt/4.png");
            break;
            default: thunderImg = loadImage("thunderbolt/1.png");
        }

        thunder.addImage(thunderImg);
    }

    if(frameCount % 30 === 0)
    {
    }

    //console.log(animate);

    drawSprites();

    umbrellaMan.display();
}   

