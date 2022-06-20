/***
 * 
 * 
 *      Creiamo un programma che prenda in intero
 *      maggiore di 0... ...
 *      una volta inserito il numero il programma
 *      chiede n valori e stampa la somma di tutti i valori
 * 
 *      ES : n => 3
 *      Significa che si aspetta 3 elementi 10 4 2 
 *      (Somma totale 16)
 *      
 *      Es _ n ==> 2
 *      50 10 --------> 60
 * 
 *      Es : n => 1
 *      6 --------------> 6     
 */

var tastiera = require("prompt-sync")()

var numeroUtente = Number(tastiera("Inserisci numero ripetizioni  ") )
//Semaforo
// -2 < 0 ? vero
// 1 < 0 ? false
while(numeroUtente < 0 ){
    numeroUtente = Number(tastiera("Inserisci numero ripetizioni  ") )
}

var somma = 0

while(numeroUtente > 0){
    somma += Number(tastiera("Inserisci un numero ") )  // somma = somma + INPUT_UTENTE
    numeroUtente--
}
console.log("La somma totale vale " + somma)