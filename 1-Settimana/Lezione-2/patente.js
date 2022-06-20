/**
 *  Check di programma della patente
 * 
 */

console.log("CHECK PROGRAMMA PATENTE")

var prompt = require("prompt-sync")()

var etaUtente = Number(prompt("Inserisci la tua età "))


//  17 >= 18 FALSE
if(etaUtente >= 18  ){
    console.log("OK PUOI FARE LA PATENTE")
}
else{
    var anniMancanti = 18 -  etaUtente
    console.log(" MI DISPIACE ANCORA NOI PUOI.. ... torna tra " + anniMancanti + " anni")
}

console.log(" -----------------FINE DEL PROGRAMMA ----------------------")