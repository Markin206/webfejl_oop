/**
 * @callback AddCallBack
 * @param {Student} student a hozzáadott diák
 * 
 * @callback SelectCallBack
 * @param {Student} student a kiválasztott diák
 */
class Manager{
    
    /**
     * @type {Student[]}
     */
    #array

    /**
     * @type {SelectCallBack} kiválasztás esetén használnánk
     */
    #selectcallback


    /**
     * @type {AddCallBack} hozzáadaás esetén használnánk
     */
    #addcallback

    constructor(){
        this.#array = []
    }

    /**
     * 
     * beállítjuk a addcallback értékét
     * 
     * @param {AddCallBack} callback a callback meg tartalmazza a callback implementációját
     */
    setAddCallBack(callback){
        this.#addcallback = callback
    }

    /**
     * 
     * beállítjuk a selectcallback értékét 
     * 
     * @param {SelectCallBack} callback a callback meg tartalmazza a callback implementációját
     */
    setSelectCallBack(callback){
        this.#selectcallback = callback
    }

    /**
     * 
     * hozzáad egy diákot a tömbhöz
     * valamint meghívja az addcallback az újszeméllyel
     * 
     * @param {Student} student hozzáadja a diák
     */
    add(student){
        this.#array.push(student)
        this.#addcallback(student)
    }

    /**
     * akkor hívjuk meg ha változtatni szeretnénk változtatni a student-en
     * @param {Student} student 
     */
    select(student){
        this.#selectcallback(student)
    }

}