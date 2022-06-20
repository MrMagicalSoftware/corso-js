

var tastiera = require("prompt-sync")()

var parola1, parola2

do {
    console.log("Inserisci 2 parola")
    parola1 = tastiera("")
    parola2 = tastiera("")
} while (parola1.length != parola2.length);


console.log("#############")

var parolaCombinata =""

var index = 0
while(index < parola1.length){

    if(index  % 2 == 0)
        parolaCombinata += parola1.charAt(index)
    else
        parolaCombinata += parola2.charAt(index)

    //index % 2  == 0 ?  parolaCombinata += parola1.charAt(index) : parolaCombinata += parola2.charAt(index)

    index++
}

console.log(parolaCombinata)