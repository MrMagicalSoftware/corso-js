/*
    Scopo : prendere in input 3 numeri
        stampare a video la moltiplicazione
*/

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var numero1 =  prompt("Inserisci un numero ")
var numero2 =  prompt("Inserisci un numero ")
var numero3 =  prompt("Inserisci un numero ")


console.log("Hai inserito il numero " + numero1 + " " +  numero2 + " " + numero3)

var risultato = numero1 * numero2 * numero3 

console.log("La moltiplicazione vale " + risultato)