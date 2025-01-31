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
     * @param {Person[]} paramArray 
     */
    constructor(paramArray = []){
        array = paramArray;
        () => {}
    }


    /**
    * @param {UpdateCallBack} callback
    */
    setUpdateCallback(callback){
        this.#updateCallBack = callback;
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
    filterName(name){
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
    }
}
class DataTable {}