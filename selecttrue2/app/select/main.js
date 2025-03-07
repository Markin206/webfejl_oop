const manager = new Manager();
Gomszab.addFileUploader(fileResult => {
  const fileLines = fileResult.split('\n');
  for(const line of fileLines){
    const fields = line.split(';');
    const correct= fields[1].trim() === '1' ? true: false;

    const card = new Card(fields[0], correct);
    manager.add(card);
  }
  manager.start();
})
const deckArea = new DeckArea('deck', manager);
const solutionArea = new SolutionArea('solution', manager);