var arr = [ 7 , 6 , 12, 3 ,1 ]


var somma = 0

for(var i = 0; i < arr.length ; i++){
    if(arr[i] % 2 == 0){
        console.log("ELEMENTO STAMPATO " + arr[i]) 
        somma += arr[i]
    }
}

console.log(somma)