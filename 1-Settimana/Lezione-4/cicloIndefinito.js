/***
 * 
 *      CHIEDERE UNA SEQUENZA DI INTERI COMPRESA TRA 10 E 20 ESTREMI INCLUSI...
 * 
 *      10 15 12 20     3
 *      19 18           7
 * 
 * 
 */

var tastiera = require("prompt-sync")()


do {
    var numero = Number(tastiera("inserisci "))
} while (numero >= 10 && numero <= 20);