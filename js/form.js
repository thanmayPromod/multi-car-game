class Form{
    constructor(){
this.info=createInput("name")
this.button=createButton("register")
this.title=createElement("h1")
this.greeting=createElement("h3")
this.reset=createButton("reset")
this.rankDiv= createDiv("")
    }
    display(){
        this.title.position(200,20)
        this.info.position(300,100)
        this.button.position(440,100)
        this.reset.position(displayWidth-150,50)
        this.title.html("multiplayer car game")
        this.button.mousePressed(()=>{

       this.info.hide()
       this.button.hide()
       this.greeting.html("welcome "+this.info.value()+" to the game")
       this.greeting.position(300,100)
       playerObj=new Player()
       playerObj.name=this.info.value()
       playerObj.index=pCount+1
       pCount=pCount+1
       playerObj.updatePlayerCount()
       playerObj.updatePlayerDetails()
        })

        this.reset.mousePressed(()=>{
        gState=0
        gameObj.updateGameState()
        pCount=0
        playerObj.updatePlayerCount()
        playerObj.rank=0
        playerObj.updateCarsAtTheEnd()  
        formObj.hide()
        this.rankDiv.hide()
        gameObj=new Game()
        gameObj.getGameState()
      formObj=new Form()
      
      gameObj.start()
        })
    }
    hide(){
     this.info.hide()
     this.button.hide() 
     this.greeting.hide()  
    
    }
showRank(rank){
this.rankDiv.html("u won with rank"+rank)
this .rankDiv.position(200,200)
this.rankDiv.style("font-size","24px")
this.rankDiv.style("color","red")
    }
}