/**
 * 
 *  CONVERTE EURO IN DOLLARI
 *  SAPENDO CHE 1 EURO --> 1.1106
 *              2 EURO ---> 1.1106 * 2
 *             23 EURO ---> 1.1106 * 23
 * 
 */

var prompt = require("prompt-sync")()

var tassoConversione = 1.1106
var euro = Number(  prompt("Inserisci gli euro") )

/*
if(euro > 0 ){
    var dollari = euro * tassoConversione
    console.log(" $ TOTALE " + dollari)
}else{
    console.log("Mi dispiace devo avere un numero > 0 ")
}
*/

// Operatore ternario ----->
var dollari = euro > 0 ? euro * tassoConversione     :      "non posso converire"
console.log(dollari)