var tastiera = require("prompt-sync")()


var listaNomi = ["paolo" , "gianni" , "pablo", "gigi"]

//prende in input un nome da tastiera e stabilite se  il 
//nome è presente in lista....

console.log("Inserisci un nome ")
var nomeDaCercare = tastiera("")
var trovato = false

for (var index = 0; index < listaNomi.length; index++) {
    if(listaNomi[index] == nomeDaCercare){
        trovato = true
        console.log("ok  presente")
        break
    }
}

if(trovato)
    console.log("Nome presente")
else
    console.log("Non presente in lista.")