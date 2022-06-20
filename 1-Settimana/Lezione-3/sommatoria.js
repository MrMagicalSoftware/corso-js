

var prompt = require("prompt-sync")()

var numeroUtente = Number(prompt("Inserisci un numero magg di ZERO     "))

//numeroUtente = numeroUtente >= 0 ? numeroUtente : - numeroUtente

var somma = 0
var index = 1

//  1 fino a 4.. ..
while(index <= numeroUtente){


    somma = somma +index  // somma = 0 + 1 --> 1 somma += index
                        // somma = 1 + 2 --> 3
                        // somma = 3 + 3 ---> 6
                        // SOMMA = 6 + 4 ---> 10
    console.log("La somma tmp vale " + somma)
    index++
}


console.log("--------------------------------")
console.log("La somma totale " + somma)
console.log("--------------------------------")