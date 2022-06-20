/**
 * 

        0  1  2   3
        c  i  a   o   -------------------->   c a




 */

var tastiera = require("prompt-sync")()

/*
var parola = "ciao"
console.log(parola.charAt(0))
console.log(parola.charAt(1))
*/

var index = 0

console.log("inserisci")
var parola = tastiera("")

/*
while(index < parola.length  ){

    if(index % 2 == 0 )
        console.log(parola.charAt(index))
    index++
}*/

var nuovaParola = ""

while(index < parola.length  ){
    //console.log(parola.charAt(index))
    nuovaParola += parola.charAt(index)
    index+=2  // index = index +2
}

console.log(nuovaParola)


/*
for(var i = 0 ; i < 100 ; i++){
    console.log(i)
}

var i = 0 
while(i < 100){
    console.log(i)
    i++
}
*/
