class ArrayList{
    /**
     * @type {number}//megadjuk a #lenght tulajdonságnak típusát (szám)
     */
    #lenght//megadunk egy privát tulajdonságot (#+megadott tulajdonság neve) //hosszt tartozó tulajdonság
    #objektum//megadunk egy privát tulajdonságot (#+megadott tulajdonság neve) //belső státusz zárt tart objektum
    get Count(){//get függvény
        return this.#lenght;//visszahívjuk a hossz tulajdonságot a this.-al
    }
    constructor(){
        this.#lenght = 0;//hosszt inicializájuk
        this.#objektum = {};//objektumot inicializájuk
    }
    Add(item){
        const index = this.#lenght;//elkérjük és eltároljuk az aktuális hosszt
        this.#objektum[index] = item;//beállítjuk a belső státuszunk index tulajdonságnak a bemeneti paramétert
        Object.defineProperty(this,index,{//this az 1. paraméter mert a példányra mutat és get set-et akarunk definiálni a példányra, index a második azon megy keresztül
            get:function(){//a get metódus lesz
                return this.#objektum[index]},
            set:function(value){//a set is function lesz és hozzáadjuk a value értéket
                    this.#objektum[index] = value},//hozzáadjuk az objektumhoz az értéket
            writable:true//engedélyezzük a felülírást
            }
        )
        this.#lenght++;//a hossz tulajdonság értékét inkrementáljuk/növeljük
    }
    Clear(){//kiürítjük az objektumot
        this.#lenght=0;//hossz lenullázása
        this.#objektum = {};//objektum kiüritése
    
    }
}
const csirke = {}
    csirke.a = 'def';
    csirke[0] = 'asd';
console.log(csirke)//kilogoljuk a csirkét


const alma = {}
Object.defineProperty(alma,'nev',{// beépített függvény//3 paraméter: 1. objektum érték = objektum aminek tulajdonságát megadjuk, 2. string érték = kulcs, //3. (type)descriptor = objektum
    value: "ferenc",//itt megadtuk az objektum értékét
    writable:true//megengedi hogy felül legyen írva az objektum
})
alma.nev = "fraud";
console.log(alma);