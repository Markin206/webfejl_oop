const gomszab = new Player("mark");
function Player(nickname){
    this.nickname = nickname
    this.playedMatch = 0;
}
/**
 * ----------------------------------------- Saját
Player.prototype.play = function(){
    this.playedMatch++;
    this.endofmatch = "LOST";
    const result = Math.floor(Math.random()* 2 - 0)
    if(result == 1){
        this.endofmatch = "WIN"
        console.log(this.nickname, this.playedMatch, this.endofmatch, gomszab.gettierlevel())
    }
    else{
        console.log(this.nickname, this.playedMatch, this.endofmatch, gomszab.gettierlevel())
    }
}
*/

Player.prototype.play = function(){
    this.playedMatch++;
    console.log(this.nickname, this.playedMatch, gomszab.gettierlevel())
}

Player.prototype.gettierlevel = function(){
    if(this.playedMatch <= 3){
        return "A";
    }
    else if(this.playedMatch > 3 || this.playedMatch <= 7){
        return "B";
    }
    else{
        return "C";
    }
}




console.log(gomszab);
gomszab.play();
gomszab.gettierlevel();