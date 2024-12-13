const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
//mi lesz a célja az osztálynak:
//1.firstname1, 2, és a lastname elraktározása
//2.init függvényeb végig iterlálunk az array-en
//3.objektízáljuk a persont
//4.person példányokat hozzáfüzzűk a tbodyhoz

    constructor(obj){//objektum lesz a paramétere | komplex constructor
        this.firstname1 = obj.firstname1,
        this.firstname2 = obj.firstname2,
        this.lastname = obj.lastname
    }

    render(parentelement){//HTMLelement lesz a parent element
        const tablerow = document.createElement('tr') //sor létrehozása
        parentelement.appendChild(tablerow)//sor hozzáadása a HTMLelementhez
        //appendchildnál fontos a sorrend. Ahogy írtuk le a programot úgy megy egymás után az appendchild.

        const celllastname = document.createElement('td')
        celllastname.innerHTML = this.lastname
        tablerow.appendChild(celllastname)

        const cellfirstname1 = document.createElement('td')//cellák létrehozása
        cellfirstname1.innerHTML = this.firstname1//cellák tartalma kiegészítjük a Person osztály "firstname1" tulajdonságával
        tablerow.appendChild(cellfirstname1)//cella hozzáadása a sorhoz


        //ugyan az mint a firstname1 cella létre hozzásánál-----------------------------
        const cellfirstname2 = document.createElement('td')
        cellfirstname2.innerHTML = this.firstname2
        if(this.firstname2 ==  undefined){//ha a firstname2 üres/undefined akkor a firstname1 cella colsapnje = 2
            cellfirstname1.colSpan = 2;
        }
        else{//ha meg nem undefined akkor hozzá adja a sorhoz a cellát
            tablerow.appendChild(cellfirstname2)
        }
        //------------------------------------------------------------------------------
    }
}

function init(){
    const tbody = document.getElementById('tbodyId')
    for(const szemely of array){//végig iterálunk a tömbön és az objektumot példányosítunk szemely néven
        const person = new Person(szemely)// létrehozzuk a konstruktort amelynek paramétere a példányosított objektum
        person.render(tbody)//meghívjuk a konstruktorral a függvényt
    }
}
init()