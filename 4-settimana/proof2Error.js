
/***
 * 
 * 
 * 
 */


var tastiera = require("prompt-sync")()

try{
    console.log("Inserisci un numero > di 10");
    var numero = Number(tastiera())

    if(numero < 10)
        throw "NUMERO MINORE DI 10"


} catch(err){
    console.log("Error was detected " + err);
    console.log("Fine del programma")
}


