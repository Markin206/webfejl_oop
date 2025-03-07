class Area {
     #div;
     #manager;

     get manager(){
        return this.#manager;
     }

     get div(){
         return this.#div;
     }

     constructor(cssclass,manager){
        this.#manager = manager;
        const container = this.#getContainer()
        this.#div = document.createElement('div');
        this.#div.className = cssclass;
        container.appendChild(this.#div);
        this.manager.setFinishCallback(this.#finishCallback(container));
     }

     #finishCallback(divContainer){
        return (result) => {
            divContainer.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'result';
            div.textContent = result;
            divContainer.appendChild(div);
        }
     }
 
     #getContainer(){
         let container = document.querySelector('.container')
         if(!container){
             container = document.createElement('div');
             container.className = 'container';
             document.body.appendChild(container);
         }
         return container;
     }
}

class DeckArea extends Area{

    constructor(cssClass, manager){
        super(cssClass, manager);
        this.manager.setNextCardCallback(this.#nextCardCallback())
    }

    #nextCardCallback(){
        return answer => {
            this.div.innerHTML = '';
            const skip = document.createElement('button');
            skip.addEventListener('click', this.#clickOnCardOrSkip())
            skip.textContent = 'skip';
            this.div.appendChild(skip);
            const cardElement = document.createElement('div');
            cardElement.textContent = answer;
            cardElement.className = 'largecard';
            cardElement.addEventListener('click', this.#clickOnCardOrSkip(answer))
            this.div.appendChild(cardElement);
        }
    }

    #clickOnCardOrSkip(selectedAnswer){
        return () => {
            this.manager.nextCard(selectedAnswer);
        }
    }

}


class SolutionArea extends Area{

    constructor(cssClass, manager){
        super(cssClass, manager);
        this.manager.setAppendCardToSolutionCallback(this.#appendCardToSolution())
    }

    #appendCardToSolution(){
        return answer => {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = answer;
            this.div.appendChild(card);
        }
    }
}