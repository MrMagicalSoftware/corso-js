var tastiera = require("prompt-sync")()

var miaLista = []       //ho creato un vettore


//Semaforo continua a chiedere un elemento
//fino a che l'utente non vada a scrivere la
//parola fine


console.log("Inserisci")
do {
    
    var elemento = tastiera("")

    miaLista.push(elemento)

} while (elemento != "fine")

console.log("##########################")

miaLista.pop()
console.log(miaLista)

console.log("##########################")
