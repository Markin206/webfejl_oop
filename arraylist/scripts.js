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
        this.#lenght++;//a hossz tulajdonság értékét inkrementáljuk/növeljük
    }
    Clear(){
        //hossz lenullázása
        //objektum kiüritése
    }
}
const csirke = {}
    csirke.a = 'def';
    csirke[0] = 'asd';
console.log(csirke)//kilogoljuk a csirkét