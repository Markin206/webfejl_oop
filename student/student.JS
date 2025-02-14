/**
 * a student entitásokat kezeli a managerünk, 
 * például amikor hozzáadjuk vagy selecetalunk egy studentot
 */
class Student{
    /**
     *  @type {Number}
     */
    #average

    /**
     * @type {string}
     */
    #name

    /**
     * @type {string}
     */
    #comment

    /**
     * @type {boolean}
     */
    #bad


    /**
     * @returns {Number} visszatér a diák átlagával
     */
    get average(){
        return this.#average
    }

    /**
     * @returns {string} visszatér a diák nevével
     */
    get name(){
        return this.#name
    }

    /**
     * @returns {string} visszatér a diákról kiadott véleménnyel
     */
    get comment(){
        return this.#comment
    }
    /**
     * @returns {boolean} igazzal tér vissza ha a diák lebukik
     */
    get bad(){
        return this.#bad
    }


    /**
     * 
     * @param {Number} average diák átlaga
     * @param {string}name diák neve
     * @param {string}comment diákról vélemény
     * @param {boolean}bad diák rossz-e
     */
    constructor(name, average, comment, bad){
        this.#name = name;
        this.#average = average;
        this.#comment = comment;
        this.#bad = bad;
    }
}