

var arr = [ 3 , 12 , 55 , 78 , 11]

for (var index = 0; index < arr.length; index++)
    if(arr[index] % 3 == 0 )
        console.log(arr[index])



var myRisposta = ""

for (var index = 0; index < arr.length; index++) {
    if(arr[index] % 3 == 0 )
        myRisposta += arr[index] + " "
}

console.log(myRisposta)


var vettSoluzione = []

for (var index = 0; index < arr.length; index++) {
    if(arr[index] % 3 == 0 )
        vettSoluzione.push(arr[index])
}

console.log(vettSoluzione)