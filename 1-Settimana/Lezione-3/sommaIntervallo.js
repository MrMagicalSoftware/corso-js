/*
    Prendo in input i due numeri
*/

var tastiera = require("prompt-sync")()

var numero1 = Number(tastiera("Inserisci il numero "))
var numero2 = Number(tastiera("Inserisci il numero "))
var somma = 0 

var max = Math.max(numero1, numero2)        //numero1 > numero2 ? numero1 : numero2
console.log("Numero massimo inserito " + max)

var min = Math.min(numero1, numero2)              //numero1 < numero2 ? numero1 : numero2

while(min <= max){
    somma += min            //somma = somma + numero1 
    min++
}

console.log("Somma finale " + somma)
// 3 + 4 +5 + 6