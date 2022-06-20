/*

    Prendere in input un numero e stabilire
    se il numero è compreso nel range che va da 10 - 20 ( inclusi ) oppure nel range che va da 21 - 30 

*/

var prompt = require("prompt-sync")()


var numero = Number(prompt(" Inserisci un numero "))

if(numero >= 10  && numero <= 20)
    console.log("Numero compreso tra 10 e 20")
else if(numero >= 21 && numero <= 30)
    console.log("Stampa compreso tra 21 e 30")
else
    console("Nsess dei casi")