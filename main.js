img = "";
myStatus = "";

objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img , 0 , 0 , 640 , 420);

    if(myStatus != ""){
        for(i = 0; i < objects.length; i++){
            console.log("stactus:object detected");

            fill("#ff0000");
            stroke("#ff0000");
            noFill();
            percent = floor(objects[i].confidence*100);
            text( objects[i].label + " " + percent + " %", objects[i].x , objects[i].y);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }  
}

function modelLoaded(){
    console.log("model has loaded");

    myStatus = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects = results;
    }
}