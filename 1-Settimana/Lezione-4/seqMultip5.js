/***
 * 
 *  Prendere in input una sequenza di multipli di 5
 *  fino a che  ho dei multiplid i 5
 *  
 */


var tastiera = require("prompt-sync")()


/*
var numeroUtente = Number(tastiera(" insert "))
while(numeroUtente % 5 == 0 ){
    numeroUtente = Number(tastiera(" insert "))
}
console.log(".......")
*/



do {
    var numeroUtente = Number(tastiera(" insert "))
} while(numeroUtente % 5 == 0)


/*
var index = 0
do {
    console.log("ok sono qui")
    index++
} while(index < 3 )
*/