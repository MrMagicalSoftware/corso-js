var tastiera = require("prompt-sync")()

//riempi il vettore
var myList = []
var index = 0 


console.log("Inserisci")
while(index < 5){
    var elemento = Number(tastiera(""))
    myList.push(elemento)
    index++
}





console.log(myList)
var tuttiElementiPari = true


/*
var i = 0 
while(i < myList.length){
    if(myList[i] % 2 != 0 ){
        tuttiElementiPari = false
        break
    }
    i++
}
*/

for(var i = 0 ; i  < myList.length ; i++){
    //trovato un elemento non pari
    if(myList[i] % 2 != 0 ){
        tuttiElementiPari = false
        break
    }
}

if(tuttiElementiPari)
    console.log("tutti elementi pari")
else
    console.log("qualche elemento è dispari")
