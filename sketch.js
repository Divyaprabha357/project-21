var canvas;
var music;
var surface1, surface2, surface3, surface4, Edges;
var box;

function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    createCanvas(800,600);
   
    //create 4 different surfaces
    surface1=createSprite(100, 575, 190, 50);
    surface1.shapeColor=rgb(300, 0, 0);
    
    surface2=createSprite(300,575, 190, 50);
    surface2.shapeColor=rgb(300, 100, 0);

    surface3=createSprite(500, 575, 190, 50);
    surface3.shapeColor=rgb(50, 150, 0);

    surface4=createSprite(700, 575, 190, 50);
    surface4.shapeColor=rgb(0, 0, 300);

    //create box sprite and give velocity
    box=createSprite(random(20, 780),20, 50,50);
    box.shapeColor="white";
    box.velocityY=8;
    box.velocityX=2;   
}
function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    Edges=createEdgeSprites();
    box.bounceOff(Edges);
    music.play();

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)){
        // change Color
        box.shapeColor=rgb(300, 0, 0);
        box.velocityY=0;
        box.velocityY =0;
        music.stop();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        // change Color
        box.shapeColor=rgb(300, 100, 0);
 

    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor=rgb(50, 150, 0);
    
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor=rgb(0, 0, 300);
    
    }
    

    drawSprites();
}
