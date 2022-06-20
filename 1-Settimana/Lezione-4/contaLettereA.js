var tastiera = require("prompt-sync")()


console.log("inserisci")
var parola = tastiera("")

var index = 0
var contaLettera = 0

while(index < parola.length){

    if(parola.charAt(index)  ==   "a" )
        contaLettera++

    index++
}


console.log("---------> " + contaLettera)

// alabarda ---->
// while ( 0   <   8) 
// parola.charAt(0) == 'a' ??  a == a

