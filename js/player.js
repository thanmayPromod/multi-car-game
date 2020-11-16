class Player{
constructor(){
this.name=""
this.distance=0
this.index=0
this.rank=0
}    
getPlayerCount(){
database   
.ref("/playerCount")
.on ("value",function(data){
  pCount=data.val()  
})
    }
updatePlayerCount(){
 database
 .ref("/")
 .update({
     playerCount:pCount
    })   
}

updatePlayerDetails(){
database
.ref("player/player"+this.index)
.update({name:this.name,distance:this.distance})
}
static getPlayerDetails(){
database
.ref("/player")
.on("value",function(data){
allPlayers=data.val()
})
}

getCarsAtTheEnd(){
database
.ref("carsAtTheEnd")
.on("value",(data)=>{ 
this.rank=data.val()
})
}

updateCarsAtTheEnd(){
database
.ref("/")
.update({carsAtTheEnd:this.rank})
}
}
