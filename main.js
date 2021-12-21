difference=0;
rightWrist=0;
LeftWrist=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,100);

 poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);    
}

function modelLoaded(){
    console.log('Posenet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        LeftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(LeftWrist-rightWrist);
    }
}

function draw(){
    background('peach');
    document.getElementById('Font_size').innerHTML="Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('aqua');
    text('Tanmay Verma',50,400)
}