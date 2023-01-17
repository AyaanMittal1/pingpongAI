video="";
wristScore=0;
wristX=0;
wristY=0;
status1=false;
function preload(){
    video=createCapture(VIDEO);
    video.hide();
}
function setup(){
    canvas=createCanvas(500,400)
    canvas.parent("canvas");
	posenet=ml5.poseNet(video,modal_ready);
    posenet.on("pose",got_results);
}
function draw(){
    image(video, 0,0,500,400);
    if(wristScore >= 0.2){
        fill("red");
        circle(wristX,wristY,20);
    }
}
function modal_ready(){
    console.log("model has loaded");
    status1=true;
}
function got_results(results){
    if(results.length >= 1){
        // wristScore=results[0].pose.rightWrist.cofedence;
        wristScore=results[0].pose.keypoints[10].score;
        wristX =results[0].pose.rightWrist.x;
        wristY =results[0].pose.rightWrist.y;
        console.log(results);
      }
}
