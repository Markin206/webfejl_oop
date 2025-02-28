class Area{
    #div;
    #manager
    get div(){
        return this.#div;
    }

    get manager(){return this. #manager}

    constructor(cssClass, manager){
        this.#manager = manager;
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = cssClass;
        container.appendChild(this.#div);
        manager.setFinishCallback(this.#finishCallBack(container))
    }


    #finishCallBack(containerDiv){
        return (resultText) => {
            containerDiv.innerHTML = '';
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.textContent = resultText
            containerDiv.appendChild(resultDiv);
        }
    }

    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div');
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }
}

class AnswersArea extends Area{
    constructor(cssClass, manager){
        super(cssClass, manager)

        this.manager.setNextAnswersCallback(this.#nextAnswerCallBack())
    }

    #nextAnswerCallBack(){
        return (answers) => {
            this.div.innerHTML = '';
            for(const answer of answers){
                const answerCard = document.createElement('div');
                answerCard.className = 'item';
                answerCard.textContent = answer;
                answerCard.addEventListener('click',this.#clickOnAnswerCard(answer))
                this.div.appendChild(answerCard);
            }
        }
    }

    #clickOnAnswerCard(answer){
        return() => {
            this.manager.nextQuestion(answer)
        }
    }
}

class QuestionArea extends Area{
    constructor(cssClass, manager){
        super(cssClass, manager)
        this.manager.setNextQuestionCallback(this.#nextQuestionCallBack())
    }
    #nextQuestionCallBack(){
        return (questionText) => {
            this.div.innerHTML = '';
            const questionCard = document.createElement('div');
            questionCard.textContent = questionText;
            this.div.appendChild(questionCard);
        }
    }
}