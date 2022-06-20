/**
 * 
 * 
 *    Creare un programma che faccia la media
 *    dei numeri compresi tra 12 e 24 (inclusi)
 *    i numeri devono essere multipli di 3
 * 
 * 
 */

var tastiera = require("prompt-sync")()


var somma = 0
var contaMultipli = 0

var numeroUtente = Number(tastiera(""))

while(numeroUtente >= 12 && numeroUtente <= 24){
    if(numeroUtente % 3 == 0 ){
        somma += numeroUtente    // somma = somma + numeroUtente
        contaMultipli++
    }
    numeroUtente = Number(tastiera(""))
}


//contaMultipli > 0 ? console.log(somma / contaMultipli) : console("NO MEDIA.. ..")

if(contaMultipli > 0){
    console.log(somma / contaMultipli)
}


/*
do {

    console.log("insert")
  
    if(numeroUtente % 3 == 0 ){
        somma += numeroUtente    // somma = somma + numeroUtente
        contaMultipli++
    }
    var numeroUtente = Number(tastiera(""))
} while (numeroUtente >= 12 && numeroUtente <= 24);


if(contaMultipli > 0){
    var media = somma / contaMultipli
    console.log(media)
}

console.log("###########################")
*/

