/**
 * 
 *      Calcolo della Media aritmentica   
 * 
 *      media = sommaValori / numeroValori 
 */

var tastiera = require("prompt-sync")()

var media, somma , numeroUtente

var index = 0
somma = 0

while(index < 4){
    numeroUtente = Number(tastiera("Inserisci "))
    somma += numeroUtente        //somma = somma + numeroUtente
    index++
}
media =somma / 4
console.log("La media vale " + media)