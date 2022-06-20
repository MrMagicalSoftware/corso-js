//Esercizio 
//dato un vettore stabilire se il vettore 
// e' ordinato in senso decresente... ..
//   [ 10   8    8  7   1 ] ====> si
//  [ 10    8    9  4    1 ]====> no
var myArr = [2 , 8 , 7 , 6  ]

var isSequOK = true

var elemento =myArr[myArr.length -1]

console.log(myArr)
for(var i = myArr.length -2 ; i >= 0 ; i-- ){

    console.log("CONFRONTO " + elemento + " con " + myArr[i])
    if(elemento > myArr[i]){
        isSequOK = false
        break
    }
    elemento = myArr[i]
}

isSequOK ? console.log("ok sequenza") : console.log("no ")