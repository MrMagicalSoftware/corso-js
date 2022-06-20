
/*
    Programma che prende in input 2 string e 
    stampa a video la string maggiore

    Es : "ciao"  "rob" -----> ciao
*/

//1-importare la tastiera
//2-init le variabili
//3-check... ..

var prompt = require("prompt-sync")()

var parola1 = prompt("Inserisci la prima parola   ")
var parola2 = prompt("Inserisci la prima parola   ")

if(parola1.length > parola2.length)
    console.log("parola maggiore " + parola1)
else if(parola1.length == parola2.length)
    console.log("parole uguali " + parola1 + " "  + parola2 )
else
    console.log(parola2)