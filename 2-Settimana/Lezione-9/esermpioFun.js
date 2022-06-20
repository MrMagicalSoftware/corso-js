
/*
Math.random()
var myString = "Rob"
console.log(myString.charAt(0))
*/


function exampleMyFun(){
    console.log("JJJJJJJJJJJJJJJ")
    //istruzione 1 
    //istruzione 2
    //istruzione 3 . .. . .
    // return ... ...
}


function somma(numero1 , numero2){
    console.log("sono nella fun somma")
    console.log("calcolo1 somma")
    console.log("calcolo 2 somma")

    var risultato = numero1 + numero2
    return risultato
}

console.log(  somma(10 , 2)        )
console.log("Sono fuori")
console.log("vado avanti")


///CREARE UNA FUNZIONE CHE PRENDE IN INPUT
///3 NUMERI E CALCOLA IL LORO PRODOTTO ........


function moltiplicaNumeri(numero1 , numero2 , numero3){

    var ris = Number(numero1)* numero2 * numero3
    return ris
    // return  numero1 * numero2 * numero3
}


var myRisultato = moltiplicaNumeri(10 , 2 , 4)
console.log(myRisultato)