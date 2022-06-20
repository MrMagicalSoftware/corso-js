/*
    ---->  ciao ------------>  ci@o
    ---->  alabarda ------>  @l@b@rd@
*/

var tastiera = require("prompt-sync")()


console.log("Inserisci")
var parola = tastiera("")

var nuovaParola = ""
var index = 0 

while(index  < parola.length){

    if(parola.charAt(index) == "a")
        nuovaParola +="@"
    else
        nuovaParola += parola.charAt(index) 

    index++
}

console.log(nuovaParola)