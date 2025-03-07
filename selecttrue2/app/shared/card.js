class Card{
    #text;
    #correct;
    get text(){
        return this.#text;
    }

    get correct(){
        return this.#correct;
    }

    constructor(text, correct){
        this.#text = text;
        this.#correct = correct;
    }
}