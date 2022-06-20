
/**
 * 
 * 
 * 
 * 
 */

var tastiera = require("prompt-sync")()


console.log("Inserisci")
var parola = tastiera("")

var parolaPalindroma =""

console.log("lunghezz vale  " + parola.length)
var index =parola.length -1

while(index >= 0 ){
    
    /*
    if(parola.charAt(index) == " "){
        index--
        continue
    }*/

    parolaPalindroma += parola.charAt(index)
    index--
}

console.log("##########################")


if(parola.split(" ").join("") == parolaPalindroma.split(" ").join(""))
    console.log("palindroma")
else
    console.log("non palindroma")