/**
 * 
 *      Prendere un numero e controllare che il numero sia > 0
 *      altrimenti continua a chiedere .. ... -7 -6    6 
 * 
 *      Dire se il numero è un numero primo .. .... ..
 *      Un numero è primo se ha solo 2 divisiori che sono se stesso e 1
 *     ( se trovo piu' di 2 divisiori non è primo .. .... ..)
 *      
 *     Es : 6 ------>   1  2  3  6  ( NON E' PRIMO)
 *          7  ------>  1    7     ( PRIMO)
 * 
 *      Es  n ------>  1 ----------  n
 * 
 *     ES   10         1            10 
 *                                              1  2 3 4 5 6 7 8 9 10
 * 
 */


var tastiera = require("prompt-sync")()

var numeroUtente = Number(tastiera("inserisci un numero  "))

while(numeroUtente < 0 ){
    numeroUtente = Number(tastiera("inserisci un numero magg di zero  "))
}

var contaDivisiori = 0
var index = 2

//     1 <= 1010
while(index <= numeroUtente){
    
    if(numeroUtente % index == 0 )     // significa che è un divisore   // 6 % 2 == 0 ??      | | | |
        contaDivisiori++

    if(contaDivisiori > 2)
        break

    index++
}

console.log(" ----------> numero di diviori ??   " + contaDivisiori)

if(contaDivisiori > 2 )
    console.log("numero non primo")
else
console.log("numero primo")
