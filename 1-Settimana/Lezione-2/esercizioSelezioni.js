

/*
    Prendere in input 2 numeri
    Es  10  2 ---> vero
        10  3 ----> false

        20 5 ----> vero

        20 7 ---> false

*/

var tastiera = require("prompt-sync")()

var numero1 , numero2
numero1 = tastiera(" Inserisci il primo numero ")
numero2 = tastiera(" Inserisci il secondo numero ")

//console.log("-------------->  " +typeof(numero1))

numero1 = Number(numero1)
numero2 = Number(numero2)

//console.log(numero1 + " " + typeof(numero1))

//  10        2
if(numero1 % numero2 == 0){
    console.log("iL NUMERO " + numero1 + " è un multiplo di " + numero2)
}
else{
    console.log("no multiplo...")
}


