const formFieldConfiguration = [
    {id: 'cardtext', label: 'allitas', type: 'text'},
    {id: 'right', label: 'igaz?', type: 'checkbox', optional: true},
]

const manager = new Manager();
const formController = new FormController(manager, formFieldConfiguration)

const exportButton = document.createElement('button')
exportButton.textContent = 'Letöltés'
document.body.appendChild(exportButton)

exportButton.addEventListener('click', () => {
    const a = document.createElement('a');
    const content = manager.generateExportText();
    const file = new Blob([content])//bináris objektum
    a.download = 'newdata.csv'//letöltés file megnevezése amint letöltjük chromera
    a.href = URL.createObjectURL(file)//ideiglenes URL-t hozz létre
    a.click();
    URL.revokeObjectURL(a.href)//eltüntetjük az url-t amit létrehoztunk
})