const formFieldConfiguration = [
    {id: 'cardtext', label: 'allitas', type: 'text'},
    {id: 'right', label: 'igaz?', type: 'checkbox', optional: true},
]

const manager = new Manager();
const formController = new FormController(manager, formFieldConfiguration)