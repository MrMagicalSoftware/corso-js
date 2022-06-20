var tastiera = require("prompt-sync")()


console.log("Inserisci")
var parola = tastiera("")

var isPalindroma = true


var index = 0

parola =parola.split(" ").join("").toString()
var indiceDecrescente = parola.length -1
//console.log("cosa sei ?? " +typeof parola)
//console.log(parola)

while(index  < parola.length){

    //console.log(parola.charAt(index) + "           " + parola.charAt(indiceDecrescente))

    if(index == indiceDecrescente)
        break
    if(parola.charAt(index) != parola.charAt(indiceDecrescente)){
        isPalindroma = false
        //console.log("CARATTERI DIVERSI")
        break
    }

    index++
    indiceDecrescente--
}

if(isPalindroma)
    console.log("palindroma")
else
    console.log("non palindroma")
