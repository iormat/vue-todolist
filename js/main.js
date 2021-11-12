/*
CREATE A TODO LIST
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: 
    digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/

var todos = new Vue (
    {
        el : '#container',
        data : {
            newTask : {text: "", done: false},
            tasks : [
                {
                    text : 'Fare la spesa', 
                    done : false,
                },
                {
                    text : 'Cucinare', 
                    done : false,
                },
                {
                    text : 'Scrivere codice', 
                    done : false,
                },
            ],
        },
        methods: {
            // push new element as task
            addTask : function() {
                if(this.newTask.text !== "" && this.newTask.text !== " ") {
                    this.tasks.push(this.newTask);
                }
                this.newTask = {text: "", done: false};
            },
            // line-through completed tasks
            getDone : function(i) {
                if(this.tasks[i].done === false) {
                    this.tasks[i].done = true;
                }else if(this.tasks[i].done === true) {
                    this.tasks[i].done = false;
                }
            },
            // delete task
            deleteTask : function(i) {
                this.tasks.splice(i, 1)
            }
        }
    }
)