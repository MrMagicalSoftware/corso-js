var tastiera = require("prompt-sync")()

var vett = []
index = 0 
while( index < 3){
    vett.push(tastiera(""))
    index++
}


function moltiplicaNumeri(numero1  , numero2  , numero3){

    var ris = Number(numero1)* numero2 * numero3
    return ris
    // return  numero1 * numero2 * numero3
}




var myRisultato = moltiplicaNumeri(vett[0] , vett[1] , vett[2])
console.log(myRisultato)



//console.log(fattoriale(5))
