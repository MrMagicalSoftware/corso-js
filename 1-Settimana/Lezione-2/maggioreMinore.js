/*
    Scopo : prendere in input 2 numeri
    stampare a video il maggiore
    Es :  10 e 5 ----> 10
*/

var prompt = require('prompt-sync')();

var numero1 , numero2

/** 
 * 
 * var numero1      ---------__----->   var numero1 , numero2
 * var numero2
*/

numero1 = Number (   prompt("INSERISCI IL NUMERO1 ")    )
numero2 = Number (   prompt("INSERISCI IL NUMERO2 ")    )

console.log(typeof(numero1))

console.log("Hai scritto " + numero1 + " e  " + numero2)


// 10            2 ???  -->  10 > 2 ?
if(numero1 >  numero2 ){
    console.log("NUMERO 1 è MAGGIORE DI NUMERO 2")
    console.log("istruz 1 ")
    console.log("istruz 2 ")

}else {
    console.log("NUMERO 2 è MAGGIORE DI NUMERO 1")
}

console.log("VADO AVANTI .. ... ")
console.log("fINE DEL PROGRAMMA ")