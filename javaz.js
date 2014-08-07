var stars = []

function setup() {
  // Create the canvas
  createCanvas(window.windowWidth, window.windowHeight);
  background(000);
  for(i = 0; i < 500; i++){
    stars[i] = new Star()
  }
  stroke(0, 0, 0)
}

function draw(){
  for(i = 0; i < stars.length; i++){
    var thisStar = stars[i]
    fill(thisStar.colorR, thisStar.colorG, thisStar.colorB)
    var move = Math.floor(Math.random() * 5)
    thisStar.xCoord += Math.floor(Math.random() * 2)
    thisStar.yCoord += Math.floor(Math.random() * 2)
    thisStar.checkyCoords()
    thisStar.checkXCoords()
    rect(thisStar.xCoord, thisStar.yCoord, thisStar.height, thisStar.width)
  }
}

function mouseClicked(){
   for(i = 0; i < stars.length; i++){
  thisStar = stars[i]
  thisStar.colorR = 255 - thisStar.colorR
  thisStar.colorG = 255 - thisStar.colorG
  thisStar.colorB = 255 - thisStar.colorB
  }
}

function Star(){
  this.direction = 1
  this.colorR = Math.floor(Math.random() * 255)
  this.colorG = Math.floor(Math.random() * 255)
  this.colorB = Math.floor(Math.random() * 255)
  this.height = 100;
  this.width = 100;
  this.xCoord = Math.floor(Math.random() * window.windowWidth)
  this.yCoord = Math.floor(Math.random() * window.windowHeight)
  this.randomXCoord = function(){
    this.xCoord = Math.floor(Math.random() * window.windowWidth)
  }
  this.randomYCoord = function(){
    this.yCoord =  Math.floor(Math.random() * window.windowHeight)
  }
  this.checkXCoords = function(){
    if(this.xCoord > window.windowWidth){
      this.xCoord = Math.floor(Math.random() * window.windowWidth)
    }
  }
  this.checkyCoords = function(){
    if(this.yCoord > window.windowHeight){
      this.yCoord = Math.floor(Math.random() * window.windowHeight)
    }
  }
}