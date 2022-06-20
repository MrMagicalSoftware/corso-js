/***
 * 
 *      Creare un programma che legga una sequenza di interi
 *      fino a che si inseriscono numeri che sono  o maggiori di 20
 *      o minori di  5 
 * 
 *      20 21 50 100  5   10
 *      
 *      1  3 4 5 100  7 
 * 
 *
 */

var tastiera = require("prompt-sync")()

var store = ""

do {
    var numeroUtente = Number(tastiera("Prompt"))
    store += numeroUtente + " " 
} while (numeroUtente >= 20 || numeroUtente <= 5);

console.log(store)
