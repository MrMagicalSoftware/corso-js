/***
 * 
 * 
 */


var tastiera = require("prompt-sync")()


console.log("Inserisci una parola")
var parola = tastiera("")

//              0     1     2    3
//              c     i     a    o

var index = parola.length - 1

var parolaAlContrario = ""

while(index >= 0 ){
    //console.log(parola.charAt(index))
    parolaAlContrario += parola.charAt(index)  // o + a + i + c
    index--
}

console.log(parolaAlContrario)