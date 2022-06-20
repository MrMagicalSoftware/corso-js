
var square =5

// DIAGONALE 1==1 ---2== 2 ...... ..i == j

for(var i = 0 ; i < square ; i++){
    for(var j = 0 ; j < square ; j++){
        //console.log("valore di i " + i + " j --> " + j)
        i == j ?  process.stdout.write("😈") : process.stdout.write("0")
    }
    
    console.log("")
}

