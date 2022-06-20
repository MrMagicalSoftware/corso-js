/**
 * 
 *  Converti minuti a secondi
 *              1---> 60 sec
 */
var prompt = require("prompt-sync")()
var minuti = Number ( prompt(" Inserisci i minuti "))

// minuti  - 18 ????  ??

if(minuti < 0){
    minuti = - minuti
}
//minuti =  minuti > 0 ? minuti : - minuti


// risoluzione tutta su una linea di codice
//  minuti >= 0 ? console.log(minuti * 60) : console.log(- minuti * 60 ) 


console.log("MINUTI -------> " + minuti)
//sono sicuro che non è negativo.. ...
var secondi = minuti * 60
console.log("SECONDI TOTALI --- > " + secondi)


