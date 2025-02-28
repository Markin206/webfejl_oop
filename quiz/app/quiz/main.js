

const manager = new Manager();
Gomszab.addFileUploader((fileResult) => {
  const fileLine = fileResult.split('\n')
  for(const line of fileLine){
    const fields = line.split(';')
    const questionText = fields[0]
    const answers = []
    answers.push(fields[1])
    answers.push(fields[2])
    answers.push(fields[3])
    answers.push(fields[4])
    const rightAnswer = fields[5].trim();
    console.log(answers)
    const question = new Question(questionText, answers, rightAnswer)
    manager.add(question)
  }
  manager.start();
})
const questionArea = new QuestionArea('question', manager);
const answersArea = new AnswersArea('answer-area', manager);
