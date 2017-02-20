var myImage;
var state = true;
var birdi=false;

function preload(){
     myImage = loadImage("door.jpg");
     bird = loadImage("bird.png");
     bird1 = loadImage("bird1.png");
     bird2 = loadImage("bird2.png");
}
function setup() {
    createCanvas(windowWidth,windowHeight)
   
}

function draw() {

   
    imageMode(CENTER)
    image(myImage,width/2,height/2,windowWidth,windowHeight);
    
    if (birdi===true){
      image(bird,width/2+150,height/2,150,150);
      image(bird1,width/2-100,height/2-200,100,150);
      image(bird2,width/2-50,height/2+130,350,300);
    }
    
    if(state === true){
        for(var i = 0; i <= windowWidth; i ++){
            var posX = random(0,width);
            var posY = random(0,height);
            var Color = get(posX,posY);
            birdi=false;
            fill(Color);
            noStroke();
            ellipse(posX,posY,30,30)
        }
    }
    
    fill(255);
    textFont('helvetica');
    textSize(100);
    textAlign(CENTER)
    text(hour(),width/2,height/12*4);
    text(minute(),width/2,height/12*7);
    text(second(),width/2,height/12*10);
   
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function mousePressed(){
    if (state === true){
      imageMode(CENTER)
        image(bird,width/2,height/2,50,50);
        state = false;
        myImage.filter("invert");
        birdi=true;
    }else {
        state = true;
        myImage.filter("invert");
    }
}
