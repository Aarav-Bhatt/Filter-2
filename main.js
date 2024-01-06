noseX=0;
noseY=0;


function preload() {
sunglasses=("sunglass.png")
}

function setup() {
Canvas=createCanvas(400,300);
Canvas.center();
Video=createCapture(VIDEO);
Video.hide()
poseNet=ml5.poseNet(Video,modelLoaded)
poseNet.on('pose',gotPoses)


    
}



function draw() {
    image(Video,0,0,400,300)
    
}


function modelLoaded() {
    console.log ("modelLoadedsuccessfully")
}
