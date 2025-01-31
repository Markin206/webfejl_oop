/**
 * @typedef {{nev:string, eletkor:Number}} Person //típust rendelünk a tulajdonságokhoz
 * @callback UpdateCallBack
 * @param {Person[]} persons
 * @returns {void}
 */
class DataManager {
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallBack}
     */
    #updateCallBack
    /**
     * 
     * @param {Person[]} personarray 
     */
    constructor(personarray = []){
        this.#array = personarray;
        this.#updateCallBack = () => {}
    }


    /**
    * @param {UpdateCallBack} callback
    */
    setUpdateCallback(callback){
        this.#updateCallBack = callback;
        this.#updateCallBack(this.#array)
    }

    /**
     * @param {Person} item
     */
    add(item){
        this.#array.push(item)
        this.#updateCallBack(this.#array)
    }

    /**
     * @param {string} nev 
     */
    filterName(name)
    {
        const result = [];
        for(const elem of this.Person)
        {
            if(elem.nev === name)
            {
            result.push(elem)
            }
        }
        this.#updateCallBack(result)
        
    }

    /**
     * 
     * @param {Number} eletkor 
     */
    filterKor(age){
        const result = [];
        for(const elem of this.Person)
        {
        if(elem.eletkor === age)
            {
            result.push(elem)
            }
        }
        this.#updateCallBack(result)
    }
}



class DataTable {
    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        document.body.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);

        dataManager.setUpdateCallback((persons) =>{
            tbody.innerHTML = "";
            for(const forPerson of persons){
                const tr = document.createElement('tr');
                const tdNev = document.createElement('td');
                const tdKor = document.createElement('td');
                tdNev.innerHTML = forPerson.nev
                tdKor.innerHTML = forPerson.eletkor

                tbody.appendChild(tr);
                tr.appendChild(tdNev);
                tr.appendChild(tdKor);
            }
        })
    }
}

const dataM = new DataManager([{eletkor: 17, nev: "feri"}])
const dataT = new DataTable(dataM)

const field = document.createElement('field')
const input1 = document.createElement('input')
const input2 = document.createElement('input')