img = "";
myStatus = "";

objects = [];

function preload(){
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(380 , 380);

    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function draw(){
    image(video , 0 , 0 , 380 , 380);

    if(myStatus != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video , gotResult);
        for(i = 0; i < objects.length; i++){
            console.log("stactus:object detected");
            document.getElementById("status").innerHTML = "Status : Detecting Objects";
            document.getElementById("number_of_objects").innerHTML = "number of objects :" + objects.length;
            fill(r , g , b);
            stroke(r , g , b);
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
    objectDetector.detect(video , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects = results;
    }
}