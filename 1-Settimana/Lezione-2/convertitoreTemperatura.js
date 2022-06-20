/*
    Converte la tempera da f -> c
    (InputUtente °F - 32) × 5/9 = -16,67 °C
*/

var prompt = require("prompt-sync")()

var temperaturaF = Number(  prompt(" Inserisci la temperatura in  °F ") )

var temperaturaC =  (temperaturaF - 32) * 5/9 

console.log(" temperatura in  °C " + Math.round(  temperaturaC) )
console.log(" temperatura in  °C " + temperaturaC )