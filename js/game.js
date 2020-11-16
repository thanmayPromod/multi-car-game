class Game{
constructor(){


    }
getGameState(){
database
.ref("/gameState")
.on ("value",function(data){
gState=data.val()
})
}
updateGameState(){
database
.ref("/")
.update({
gameState:gState
})
}
async start(){
if(gState===0){
var playerCountref=await database.ref("/playerCount").once("value")
if(playerCountref.exists()){
pCount=playerCountref.val()
playerObj=new Player()
playerObj.getPlayerCount()
}
formObj.display()

}  
 car1=createSprite(200,200)
 car1.addImage("car1",car1img)

 car2=createSprite(200,200)
 car2.addImage("car2",car2img)

 car3=createSprite(200,200)
 car3.addImage("car3",car3img)

 car4=createSprite(200,200)
 car4.addImage("car4",car4img)
cars=[car1,car2,car3,car4]
}
play(){
playerObj.getCarsAtTheEnd()
formObj.hide();
Player.getPlayerDetails()
if(allPlayers!=undefined){
    var index=0
    var x=175
    var y=0
image (trackImg,0,-4*height,width,height*5)
for(var player in allPlayers ){
x=x+200
y=displayHeight-allPlayers[player]["distance"]-100
cars[index].x=x
cars[index].y=y
console.log(x,y,player)
if(index+1===playerObj.index){
camera .position.x=displayWidth/2
camera .position.y=y
stroke ("red")
strokeWeight(6)
circle(cars[index].x,cars[index].y,50)
}
index=index+1
}
if(keyDown(UP_ARROW)&&playerObj.index!==0&&gState===1){
playerObj.distance=playerObj.distance+50
playerObj.updatePlayerDetails()
console.log(playerObj.rank,gState)
}
if(playerObj.distance>3500&&gState===1){
gState=2
playerObj.rank=playerObj.rank+1
playerObj.updateCarsAtTheEnd()
}
drawSprites()
}

}
}
