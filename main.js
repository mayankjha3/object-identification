img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img , 0 , 0 , 640 , 420);

    fill("#ff0000");
    stroke("#ff0000");
    noFill();
    text("dog" , 45 , 75);
    rect(30 , 60 , 450 , 350);
}