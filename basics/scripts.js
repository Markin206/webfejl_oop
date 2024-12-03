
// function Player(nickname){
//     this.nickname = nickname
//     this.playedMatch = 0;
// }
// /**
//  * ----------------------------------------- Saját
// Player.prototype.play = function(){
//     this.playedMatch++;
//     this.endofmatch = "LOST";
//     const result = Math.floor(Math.random()* 2 - 0)
//     if(result == 1){
//         this.endofmatch = "WIN"
//         console.log(this.nickname, this.playedMatch, this.endofmatch, gomszab.gettierlevel())
//     }
//     else{
//         console.log(this.nickname, this.playedMatch, this.endofmatch, gomszab.gettierlevel())
//     }
// }
// */ ----------------------------------------------------

// Player.prototype.play = function(){
//     this.playedMatch++;
//     console.log(this.nickname, this.playedMatch, gomszab.gettierlevel())
// }

// Player.prototype.gettierlevel = function(){
//     if(this.playedMatch <= 3){
//         return "A";
//     }
//     else if(this.playedMatch > 3 || this.playedMatch <= 7){
//         return "B";
//     }
//     else{
//         return "C";
//     }
// }

class Player{
    constructor(nickname){
        this.nickname = nickname;
        this.playedMatch = 0;
    }


play(){
    this.playedMatch++;
    //--------------------------------------------------------------------------------------- SAJÁT /// NEM ÓRAI ///
    this.endofmatch = "LOST";
    const result = Math.floor(Math.random()* 2 - 0)
    if(result == 1){
        this.endofmatch = "WIN"
        console.log(this.nickname, this.playedMatch, this.endofmatch, gomszab.gettierlevel())
    }
    else{
        console.log(this.nickname, this.playedMatch, this.endofmatch, gomszab.gettierlevel())
    }
    //--------------------------------------------------------------------------------------- SAJÁT /// NEM ÓRAI ///
}

gettierlevel(){
    if(this.playedMatch <= 3)
        return "A";
    else if(this.playedMatch > 3 && this.playedMatch < 8)
        return "B";
    else
        return "C";
}
}

function printtierlevel(Player) {//meghívjuk az osztályt
    console.log(`${Player.nickname} jelenlegi tiere: ${Player.gettierlevel()}`); //az osztályon belüli tulajdonságot és függvényt meghívjuk
}
const gomszab = new Player("mark");
console.log(gomszab);
gomszab.play();
gomszab.gettierlevel();
printtierlevel(gomszab); //10.feladat meghívása