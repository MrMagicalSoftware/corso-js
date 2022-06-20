/***
 * 
 *    nota : si prenda in input una sequ di numeri che termina con il valore 0
 *          il programma al termine della sequenza stampa a video
 *          se la sequenza è crescente oppure no.. . .
 * 
 *          Es :  6 18 21  22       0 ----->  si
 *                6 18 15 25 45     0-----> no
 * 
 */

var tastiera = require("prompt-sync")()

var isCrescente = true

var numeroUtente = Number(tastiera(" iNSERISCI UN VALORE")) 
var numeroPrecedente = numeroUtente


while(numeroUtente != 0 ){
    
    numeroUtente = Number(tastiera(" iNSERISCI UN VALORE"))

    if(numeroUtente == 0)
        break
    if(numeroUtente < numeroPrecedente){
        console.log("Sono qui dentro......")
        isCrescente2 = 20
        isCrescente = false
    }
    numeroPrecedente = numeroUtente 
}




if(isCrescente == true)
    console.log("Sequenza crescente")
else
    console.log("Non crescente")


console.log("Fine del programma")


