var tastiera = require("prompt-sync")()

//console.log("😀")
//console.log("🤣")

var base , altezza

console.log("inserisci la base")
do {
    base = tastiera("")
} while (base  <= 0 );

console.log("inserisci altezza")
do {
    altezza = tastiera("")
} while (altezza  <= 0 );

console.log("Hai inserito  BASE " + base + " Altezza " + altezza )


for(var i = 0 ; i < altezza ; i++){

    for(var j = 0 ; j < base ; j++){
        if(j % 2 == 0 )
            process.stdout.write("😀") 
        else
            process.stdout.write("🤣")
    }
    console.log()


}