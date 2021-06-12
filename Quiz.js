class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    
    textSize(30);
    text("Result of the Quize!!",340,50);
    contestant.getPlayerInfo();
    
    if(allContestants !== undefined){
      debugger
      var display_answer= 230;
     
        fill("blue");
       textSize(20)
       text("NOTE:contestant who answered correct are highlighted in green color!",130,230)
      
      for(var plr in allContestants){
        debugger
      var correctAns= "2"
      if(correctAns=== allContestants[plr].answer)
      fill("green")
      else
      fill ("red")

      display_answer+= 30;
      textSize(20);
      text(allContestants[plr].name + ":"+ allContestants[plr].answer,250,display_Answer)
    }
  }
} 
}
    
    
    
   
    
    
    
    
   
  


