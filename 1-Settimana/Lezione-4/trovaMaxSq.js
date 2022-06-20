/***
 * 
 *      Prende in input una serie di numeri .. . .. . ..
 *      la sequenza termina quando si incontra il valore 0 ( SENTINELLA)
 * 
 *      IL PROGRAMMA STAMPA A VIDEO IL MAX INSERITO NELLA SEQ
 * 
 *      Es    8 7 14 21 88 1 71  0  ------------------> 88
 * 
 */


var tastiera = require("prompt-sync")()

var numeroUtente = Number(tastiera(" inserisci un numero ")) //20

var max = numeroUtente  // 20

while(numeroUtente != 0){
    numeroUtente = Number(tastiera(" inserisci un numero ")) // 30
    
    if(numeroUtente > max)  // 30 > 20 
        max = numeroUtente
    
}

console.log("valore max " + max)