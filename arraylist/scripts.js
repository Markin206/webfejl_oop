class ArrayList{
    /**
     * @type {number}//megadjuk a #lenght tulajdonságnak típusát (szám)
     */
    #lenght//megadunk egy privát tulajdonságot (#+megadott tulajdonság neve) //hosszt tartozó tulajdonság
    #objektum//megadunk egy privát tulajdonságot (#+megadott tulajdonság neve) //belső státusz zárt tart objektum
    get Count(){//get függvény
        return this.#lenght;//visszahívjuk a hossz tulajdonságot a this.-al
    };
    #htmlArray

    constructor(array = undefined){
        this.#lenght = 0;//hosszt inicializájuk
        this.#objektum = {};//objektumot inicializájuk
        this.#htmlArray = array;
    };
    Add(item){
        const index = this.#lenght;//elkérjük és eltároljuk az aktuális hosszt
        this.#objektum[index] = item;//beállítjuk a belső státuszunk index tulajdonságnak a bemeneti paramétert
        Object.defineProperty(this,index,{//this az 1. paraméter mert a példányra mutat és get set-et akarunk definiálni a példányra, index a második azon megy keresztül
            get:() =>{//a get metódus lesz
                return this.#objektum[index]},
                enumerable: true,
                configurable: true,
            set:(value)=>{//a set is function lesz és hozzáadjuk a value értéket // => az megegyezik a function
                    this.#objektum[index] = value},//hozzáadjuk az objektumhoz az értéket
            writable:true//engedélyezzük a felülírást
            }
        );
        if(this.#htmlArray){
            this.#htmlArray.addPersonRow(item)
        }
        this.#lenght++;//a hossz tulajdonság értékét inkrementáljuk/növeljük
    };
    Clear(){//kiürítjük az objektumot
        console.log('clear eleje');
        for(const key in this){
            delete this[key]
        }
        this.#lenght=0;//hossz lenullázása
        this.#objektum = {};//objektum kiüritése
        console.log('clear vége');
    };
};

//-------------------------------------------------------------------------------- ki iratások 

const csirke = {};
    csirke.a = 'def';
    csirke[0] = 'asd';
console.log(csirke);//kilogoljuk a csirkét


const alma = {};
Object.defineProperty(alma,'nev',{// beépített függvény//3 paraméter: 1. objektum érték = objektum aminek tulajdonságát megadjuk, 2. string érték = kulcs, //3. (type)descriptor = objektum
    value: "ferenc",//itt megadtuk az objektum értékét
    writable:true//megengedi hogy felül legyen írva az objektum
});
alma.nev = "fraud";
console.log(alma);

//-------------------------------------------------------------------------------- ArrayHTMLTable osztály

class ArrayHTMLTable extends HTMLElement{

    #tbody

    constructor() {
        super();
    }

    connectedCallback(){
        const table = document.createElement('table');
        this.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
    }
    /**
     * @param {{nev:string eletkor:Number}} param megadjuk a paraméter tulajdonságait ezáltal elérhető (mostantól csak így lehet kommentelni csak!!!)
     */
    addPersonRow(param){
        const tr = document.createElement('tr');
        const nev = document.createElement('td');
        const eletkor  = document.createElement('td');

        nev.innerText = param.nev;
        eletkor.innerText = param.eletkor.toString();

        this.#tbody.appendChild(tr);
        tr.appendChild(nev);
        tr.appendChild(eletkor);
    }
}

customElements.define('array-table', ArrayHTMLTable);

const arrayTable = new ArrayHTMLTable();
document.body.appendChild(arrayTable);


const button = document.createElement('button');//létrehozunk egy gomb elemet
button.innerHTML = "Hozzáad";//megadjuk a gomb szövegét
button.addEventListener('click', )