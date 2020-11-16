var  database;
var gameObj,formObj,playerObj
var gState,pCount
var allPlayers
var car1,car2,car3,car4,cars,car1img,car2img,car3img,car4img
var trackImg
function preload(){
car1img=loadImage("images/car1.png")
car2img=loadImage("images/car2.png")
car3img=loadImage("images/car3.png")
car4img=loadImage("images/car4.png")
trackImg=loadImage("images/track.jpg")
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  gState=0
  pCount=0
  gameObj=new Game()
  gameObj.getGameState()
formObj=new Form()
gameObj.start()
}

function draw(){
  background("white");
if(pCount===4&&gState===0){
  gState=1
  gameObj.updateGameState()
}
 if(gState===1||gState===2){
   gameObj.play()
   console.log("thanmay",gState)
 }
  if(gState===2){
    formObj.showRank(playerObj.rank)
  }
  
}


