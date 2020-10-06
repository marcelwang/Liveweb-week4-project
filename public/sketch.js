//Created 10.04.2020 for Live Web: Control video to move around the canvas with nose
let video;
let poseNet;
let pose;
//define user's given location.
let userX;
let userY;


function setup() {
  createCanvas(480, 360);
  video = createCapture(VIDEO);
  video.size(144, 108);
  video.hide();

  //set up to get info from poseNet
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);

}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelReady() {
  console.log('model ready');
}


function draw() {


  if (pose) {
    background(255);
    imageMode(CENTER);

      //this value should be the location that got assigned to the user when he/she first enter the video streaming platform
    let userX = 100;
    let userY = 250;

    //flip the video pixel and control video swinging with nose position
    let nose = pose.nose;
    translate(video.width, 0);
    scale(-1, 1);
    image(video, nose.x + userX, nose.y + userY);

  }
}
