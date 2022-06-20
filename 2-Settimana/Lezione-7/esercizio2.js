

var myList = [ 10 ,8 ,7, 6 ]

var elemento = myList[0]
var isSeq = true

for(var i = 1 ; i < myList.length ; i++){
    if(elemento < myList[i]){
        isSeq = false
        break
    }
    elemento = myList[i]
}
isSeq ? console.log("ok") : console.log("no")