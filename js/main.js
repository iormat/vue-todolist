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
            newTask : "",
            tasks : [
                {
                    text : 'Fare la spesa', 
                    done : true,
                },
                {
                    text : 'Cucinare', 
                    done : true,
                },
                {
                    text : 'Scrivere codice', 
                    done : false,
                },
            ],
        },
    }
)