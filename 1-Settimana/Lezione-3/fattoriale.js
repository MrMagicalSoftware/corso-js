/*
    Calcolo del fattoriale di un numero
    5! = 5 * 4 * 3 *2 * 1
*/

var prompt = require("prompt-sync")()

var numeroUtente = Number(prompt(" inserisci un numero "))
var fattoriale = 1

/*
var index = 1
while(index <= numeroUtente){
    fattoriale = fattoriale * index 
    index++
}
console.log("Fattt totale " + fattoriale)
*/

//index = numeroUtente

// 3  --->    3 >0 ?   --->  fatt  = (1 * 3)  * 2 * 1
while(numeroUtente > 0){
    fattoriale = fattoriale * numeroUtente
    numeroUtente--
}
console.log(fattoriale)