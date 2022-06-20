
var tastiera = require("prompt-sync")()

//Input una parola di almeno 4 caratteri

do {
    console.log("Insert ")
    var parola = tastiera("")
} while (parola.length < 4);

console.log("##########################")

var contaConsonanti = 0
var index = 0 


while ( index < parola.length){

    // a !=a  && p !=e  -->  f and t
    if( parola.charAt(index) != 'a' && parola.charAt(index) != 'e' &&
        parola.charAt(index) != 'i' && parola.charAt(index) != 'o' &&
        parola.charAt(index) != 'u')
        contaConsonanti++
    index++
}

console.log("totale " + contaConsonanti)