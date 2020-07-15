//jshint esversion: 6
/* 
Problem definition
snake_ladder game
*/

function SnakeLadder(die1, die2) {
    if((die1 && die2) && die1 < 7 && die2 < 7 ){
        this.die1 = die1;
        this.die2 = die2;
        this.play = function(){
            return die1 + die2;
        };
        this.isCorrect = true;
    }else{
        console.log("die1 and die2 must be between 1 - 6");
        this.isCorrect = false;
    }
}

const myDie = new SnakeLadder(6,1);
if(myDie.isCorrect){
    let playDice = myDie.play();
    console.log("you move playDice by: " + playDice);
}