var stars = []

function setup() {
  // Create the canvas
  createCanvas(window.windowWidth, window.windowHeight);
  background(000);
  for(i = 0; i < 1000; i++){
    stars[i] = new Star()
  }
}

function draw(){
  for(i = 0; i < stars.length; i++){
    fill(203, 150, 0)
    var thisStar = stars[i]
    thisStar.xCoord += 3
    thisStar.yCoord += 3

    ellipse(thisStar.xCoord, thisStar.yCoord, thisStar.height, thisStar.width)
  }
}

function Star(){
  this.height = 5;
  this.width = 5;
  this.xCoord = Math.floor(Math.random() * window.windowWidth)
  this.yCoord = Math.floor(Math.random() * window.windowHeight)

}