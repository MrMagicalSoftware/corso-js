/***
 * 
 *      Prendo in input 2 numeri che sono base ed esponente e calcolo la potenza..
 *      ovvero esempio :
 * 
 *      base = 2
 *      esponente = 3 
 *      potenza = 2 * 2 * 2
 * 
 *      Es :
 * 
 *      base = 5
 *      esp = 4 
 *      potenza = 5 * 5 * 5 * 5
 *      
 * 
 * 
 */

var tastiera = require("prompt-sync")()

var base, esponente , potenza

base = Number(tastiera("Inserisci la base "))       // 2
esponente = Number(tastiera("Inserisci ESPONEN "))  //5

potenza = 1  //importante


var risultatoPotenza = base ** esponente
console.log("-----------_---------------->  " + risultatoPotenza)


// esp = 0
while(esponente > 0){
    potenza = potenza * base  //potenza = 1 * 2 = 2 * 2 * 2
    esponente--
}
console.log("LA POTENZA VALE " + potenza)
