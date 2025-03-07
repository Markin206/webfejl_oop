/**
 * manageli és rendelei a formunkat a fieldjeink segítségével
 */
class FormController{
    /**
     * privát tulajdonság amely a Manager osztály tipusa lesz
     * @type {Manager}
     */
    #manager;
    /**
     * ez fogja tartalmazni a fieldeket
     * @type {FormField[]}
     */
    #formFieldArray

    /**
     * 
     * @param {Manager} manager 
     * @param {{label: string, type: string, id: string, optional?: boolean}[]} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        this.#formFieldArray = [];
        this.#manager = manager;
        const form = document.createElement('form')
        document.body.appendChild(form)
        for(const field of fieldConfiguration){
            const formField = new FormField(field.id, field.label, field.type, field.optional)
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getDivElement());
        }
        const sendButton = document.createElement('button');
        sendButton.textContent = 'Elküld';
        form.appendChild(sendButton);
        form.addEventListener('submit',(e) => {
            e.preventDefault();
            //validáljuk a fieldeket, megjelenítjük az errorokat
            
            if(this.#validateFields()){
                const value = this.#getvaluObject();
                const card = new Card(value.cardtext, value.right)
                this.#manager.add(card);
                e.target.reset();//törli az inputokból az értékeket

            //elkérjük a fieldek értékeit
            //példányosítunk egy cardot
            //hozzáadjuk a managerhez

            }
        })
    }
    /**
     * validálja a fieldeket, és megjelíti a hiba üzeneteket, ha szükséges
     * 
     * @returns {boolean} igazzal tér vissza ha minden field helyesen
     * van kitöltve
     */
    #validateFields(){
        let valid = true;
        for(const formField of this.#formFieldArray){
            if(!formField.optional){
                if(formField.value == ''){
                    formField.error = "A mező kitöltése kötelező"
                    valid = false
                }
            }
        }
        return valid;
    }
    /**
     * végigmegy a formfieldeken, es idhoz rendeli 
     * az értékeket amik az inputokba vannak
     * @returns {cardtext: string, right:boolean} a form fieldek értékei
     */
    #getvaluObject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        console.log(result)
        return result;
    }
}

/**
 * Ez fogja tartalmazni a labeleket az inputokat, errorspanokat
 * pl.: text input alatta errorspan
 */
class FormField{
    /**
     * @type {string}
     */
    #id

    /**
     * @type {string}
     * ez a tulajdonság az inputok tipusa
     */
    #type

    /**
     * @type {boolean}
     * a checkbox értéke
     */
    #optional

    /**
     * @type {HTMLInputElement}
     */
    #inputField

    /**
     * @type {HTMLLabelElement}
     */
    #laberElement

    /**
     * @type {HTMLSpanElement}
     */
    #errorElement

    get id(){
        return this.#id;
    }

    /**
     * Ha az input típusa checkbox akkor visszatér azzal, hogy
     * be van pipálva vagy sem, ha pedig text, akkor visszatér a szöveggel
     * 
     * @returns {boolean|string}
     */
    get value(){
        if(this.#type === 'checkbox'){
            return this.#inputField.checked;
        }return this.#inputField.value;
    }

    /**
     * ha opcionális akkor igaz
     */
    get optional(){
        return this.#optional;
    }

    /**
     * beállítja az error field tartalmát
     */
    set error(value){
        this.#errorElement.textContent = value;
    }

    /**
     * 
     * @param {string} id 
     * @param {string} labelContent 
     * @param {string} type 
     * @param {boolean?} optional 
     */
    constructor(id, labelContent, type, optional = false){
        this.#id = id;
        this.#type = type
        this.#optional = optional
        this.#laberElement = Gomszab.makeLabel(id, labelContent)
        this.#inputField = Gomszab.makeInput(id, type)
        this.#errorElement = Gomszab.makeErrorField()
    }

    /**
     * létrehozz egy div elementet, amiben benne van
     * az pinut, a label, az errorspan
     * 
     * @returns {HTMLDivElement} a div ami tartalmazza a fieldjeinket
     */
    getDivElement(){
        const fields = [this.#laberElement, this.#inputField, this.#errorElement]
        const div = Gomszab.makeDiv(fields)
        return div;
    }
}