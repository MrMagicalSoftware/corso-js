/*
    Scopo : Prendere in input un numero
            dire il numero è pari o dispari
*/

var prompt = require('prompt-sync')();

var numeroUtente = Number( prompt(" Inserisci un numero") )

console.log(typeof(numeroUtente))
console.log("Il numero inserito  ----->  " + numeroUtente + "  tipo di dato ----->  " + typeof(numeroUtente) )

//         10 % 2 == 0 ?? ?? ---->  0  == 0 ? --> true
if(      numeroUtente % 2 == 0              ){
    console.log("Il numero " + numeroUtente + " è pari ")
}
else{
    console.log("Il numero " + numeroUtente + " è dispari ")
}