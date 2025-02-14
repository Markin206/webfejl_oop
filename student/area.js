class Area{
    /**
     * @type {HTMLDivElement}//ez a konténer az elemeknek
     */
    #div

    /**
     *  @returns {HTMLDivElement}//vissza tér az adott konténerell
     */
    get div(){//ezáltal el lehet érni a osztályo kivül is
        return this.#div
    }

    /**
     * 
     * @param {string} className //css osztályát tartalmazza az adott területnek
     */
    constructor(className){
        const container = this.#getcontanier();
        this.#div = document.createElement('div')//# fontos mert a tulajdonságnak adunk értéket nem a getter-nek
        this.#div.className = className;
        container.appendChild(this.#div)
    }

    /**
     * A container classal rendelkező elembe tesszülk bele az alkalmazás egyes reszeit
     * Elso sorbab negbézzük létezik-e a container osztállyal rendelkező div
     * ha nem létezik létrehozunk egyet
     * 
     * @returns {HTMLDivElement} //vissza tér a container classal rendelkező elemmel
     */
    #getcontanier(){
        let container = document.querySelector('.container')//lekerjuk a containert
        if(!container){
            container = document.createElement('div')//letrehozzuk
            container.className = 'container'//FONTOS, ha ujra meghívjuk akkor adunk neki egy container osztályt
            document.body.appendChild(container)
        }
        return container
    }
}


/**
 * létrehoz egy details területett a megadott CSS osztállyal
 * extend = kibővítés
 * super = elérhető bármi az ősosztályból
 */
class DetailsArea extends Area{

    /**
     * 
     * @param {string} className a css osztály 
     */
    constructor(className){
        super(className)//meghívjuk az ősosztály konstruktorát
    }
}


/**
 * Ez fogja tartalmazni a diákok listáját
 */
class StudentArea extends Area{
    /**
     * @param {Manager} manager manager példány
     * @param {string} className a css osztály 
    */
   constructor(className, manager){
       super(className)//meghívjuk az ősosztály konstruktorát
       manager.setAddCallBack((student) =>{
           const studentCard = document.createElement('div');
           studentCard.className = 'student-card';
           const NameSpan = document.createElement('span');
           NameSpan.textContent = student.name;
           NameSpan.style.color = student.bad ? 'red' : 'black';
           studentCard.appendChild(NameSpan)
           studentCard.appendChild(document.createElement('br'));

           const averageSpan = document.createElement('span');
           averageSpan.textContent = student.average;
           studentCard.appendChild(averageSpan)
           studentCard.appendChild(document.createElement('br'));
           this.div.appendChild(studentCard)
           studentCard.addEventListener('click', (e) =>{
            const cardList = document.querySelectorAll('.student-card')
            for(const card of cardList){//végigiterálunk a student cardokon
                card.className = "student-card"
                //mivel a selectednél a student card mellet 
                //lesz egy selected css class, ezért ha az összesnek megadjuk
                //az eredeti class selectedes törlödik
            }
            e.currentTarget.classList.add('selected')
           })
        })
    }
}