/**
 * 
 * 
 *      1-36 
 *      Posso puntare o sul colore oppure 
 *      sul numero
 *      
 *      Numeri dispari ---> rosso
 *      Nuemri pari    ---> neri
 * 
 * 
 */

var tastiera = require("prompt-sync")()
console.log("colore o puntata ?")

var scelta = tastiera()

if(scelta == "colore"){

    console.log("rosso o nero ?")
    var colore = tastiera("")
    //semaforo 
    while(colore != "rosso" && colore!="nero"){    // n != r && n != n  v && f --> f
        colore = tastiera("deve essere nero o rosso   ")
    }
    console.log("ok gioco....")
    var roulette = Math.floor(Math.random() * (36) + 1)
    console.log("NUMERO ESTRATT " + roulette)
    //Numeri dispari ---> rosso
    //Nuemri pari    ---> neri

    var coloreVincita =   roulette % 2 == 0 ? "nero" : "rosso"
    coloreVincita == colore ? console.log("vinto") : console.log("no ")
  

}
else if(scelta == "puntata"){

}
else{
    console.log("ok ciao ciao")
}