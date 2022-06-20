/***
 * 
 *      Prendere un numero da tastiera
 *      con n > 0 ( semaforo)
 * 
 *      salvare in un vettore tutti i divisori del numeri
 * 
 *      ES : 10 ------------------------> [1 , 2 , 5 , 10]
 *      
 *          1 - 10
 * 
 *      50 ---> i divisori banali sono 1 -50
 *      20 --->                        1 -20
 *      x --->                         1 - x
 */

var tastiera = require("prompt-sync")()

//Semeforo...


var numeroUtente

console.log("Inserisci un numero")
do {
    numeroUtente = tastiera("")
} while (numeroUtente <= 0);


var risultati = []

for(var i = 1 ; i <= numeroUtente / 2  ; i++){
    if(numeroUtente % i == 0 )  // se trovo un divisore
        risultati.push(i)
}
risultati.push(Number(numeroUtente))

console.log(risultati)


