

var tastiera = require("prompt-sync")()

var parola = tastiera("Inserisci una parola    ")
var index = 0

console.log("##################################")

while(index < parola.length){
    console.log(parola.charAt(index))
    index++
}

console.log("##################################")
