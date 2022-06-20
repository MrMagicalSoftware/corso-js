/****
 * 
 *  Creo un programma che simula 
 *  il lancio di due dadi (1- 6)
 *  se la somma dei 2 lanci è uguale a 7
 *  mi dice ho vinto altrimenti ho perso
 * 
 * 
 */


var dado1 = Math.floor(Math.random() * (6) + 1)  
var dado2 = Math.floor(Math.random() * (6) + 1)  
console.log(dado1 +    "  " + dado2 )

var somma = dado1 + dado2

if(somma == 7)
    console.log("hai vinto")
else
    console.log("hai perso")
