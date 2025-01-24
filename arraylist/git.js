function fun(param){
    console.log(param.nev);
}

fun({nev: "Huba Szaki"});
function funA(){
    console.log(this.nev);
}

const korte = funA.bind({nev: "II. András"});

korte();
const funB = function (param){
    console.log(param.nev);
}

funB({nev:'Vég Béla'});
const funC = (param) =>{
    console.log(param.nev);
}

funC({nev: 'Fiká Zoltán'});

const obj = {
    funA: (param) =>{
        console.log(param.nev);
    },
    funB: (param) =>{
        console.log(param.eletkor);
    }
}

obj.funA({nev:'Ka pál'});
obj.funA({nev:'Krump Lee'});