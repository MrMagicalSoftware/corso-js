/*
    Mi stampa il succ di un numero
    es  9 ----> 10
        100 --> 101
    -5  ----> -4
*/

var prompt = require("prompt-sync")()

var numeroUtente = Number(prompt("inserisci un numero"))

//var succ = numeroUtente +1
//console.log(succ)


numeroUtente++    

console.log(  numeroUtente     )