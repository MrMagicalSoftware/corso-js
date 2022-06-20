

var myVett = [10 , 77  , 88 , 5 , 77]

var max = myVett[0]
var min = myVett[0]

for(var i = 1 ; i < myVett.length ; i++){

    if(myVett[i] > max){   //  77 > 10 ? si ---> max = 77     88 > 77  max = 88
        max = myVett[i]    
    }

    if(myVett[i] < min){
        min = myVett[i]
    }

    //max = myVett[i] > max  ? myVett[i] : max
    //min = myVett[i] < min  ? myVett[i] : min
}

console.log("Max con la funzione   " +   Math.max(...myVett)     )

console.log("Max vale "+ max )
console.log("Min vale "+ min )