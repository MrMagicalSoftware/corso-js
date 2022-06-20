/*
    Scopo : prendere in input 2 numeri e fare la somma


*/

console.log("Benvenuto nel programma")
var prompt = require('prompt-sync')();


var numero1

numero1 = prompt("Inserisci il primo numero")
var numero2 = prompt("Inserisci il secondo numero")

console.log(typeof(numero1) + "  " + typeof(numero2))
var somma = Number(numero1) + Number(numero2)  // Casting
console.log("La somma vale  " + somma)