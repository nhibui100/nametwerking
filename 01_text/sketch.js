let akkurat;
let fontSize = 320;
let nhiArray;
let r=0;

  //save video
let gifLength=180;
let canvas;
let frameCount;


function preload() {
  akkurat = loadFont('Akkurat.otf');
}

function setup() {
    //save video
  var p5Canvas = createCanvas(800, 800);
  canvas = p5Canvas.canvas;


  textFont(akkurat);
  textSize(fontSize);
  frameRate(5);


  nhiArray = akkurat.textToPoints("nhi", width / 2 - 230, height / 2+80, fontSize);


}

function draw() {
  background(220);

  //save video
if (frameCount === 0) {capturer.start()};
if (frameCount < gifLength) {
  capturer.capture(canvas);
} else if (frameCount === gifLength) {
  capturer.stop();
  capturer.save();
}


  // text("nhi", width/2-30, height/2);
  for (let i = 0; i < nhiArray.length; i++) {
    push();
    translate(nhiArray[i].x, nhiArray[i].y);
    rotate(r);
    r++;
    stroke(255,255,255);
    strokeWeight(1);
    line(-5, -5, 5,5);
    pop();
  }


}
