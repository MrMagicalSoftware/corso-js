
var prompt = require("prompt-sync")()
var myList = [3 , 4 , 1 , 2]

//numeri compresi tra 3 -5

console.log("Inserisci un numero")
var numeroUtente = Number(prompt(""))


//CICLO INDEFINITO
while(numeroUtente < 3 || numeroUtente >5 ){
    console.log("inserisci")
    numeroUtente = Number(prompt(""))
}


/*
for(     ;  numeroUtente < 3 || numeroUtente >5       ;       ){
    console.log("inserisci")
    numeroUtente = Number(prompt(""))
}
*/


// 4 < 3  || 4 > 5 ---------->  F || F  ---> F


for(var i = 0 ; i < myList.length ; i++)
    myList[i] *= numeroUtente // myList[i] = myList[i] * numeroUtente



/*

var index = 0
while(index < myList.length){    
    myList[i] *= numeroUtente
    index++
}

*/
