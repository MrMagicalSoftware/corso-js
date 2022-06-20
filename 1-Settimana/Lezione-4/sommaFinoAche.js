/***
 * 
 *      Sommo una sequ di numeri indefinita
 *      fino a che non trovo un valore speciale (Sentinella)
 *      alla fine della sequen stampo la somma totale
 * 
 *      ES : 4 2 2 -1
 *      -----------------------> ( 4 + 2 + 2 )
 * 
 */


var tastiera = require("prompt-sync")()

var numeroUtente = Number(tastiera(" INSERISCI UN SERIE DI numeri"))

var somma = 0

while(numeroUtente != -1){
    somma += numeroUtente
    numeroUtente = Number(tastiera(" INSERISCI UN SERIE DI numeri"))
    if(numeroUtente == -1)
        console.log("FINE SEQ -- -- --")
}
console.log(" somma finale " + somma)