

var myVett = [10 , 11, 4]


var somma = 0


for(var i = 0 ; i < myVett.length; i++){
    somma = somma + myVett[i]  // somma += myVett[i]
}

// somma = 0 + myVett[0] ----->  0 + 10 
// somma = 10 + myVett[1] ---->  10 + 11 ---> 21
// somma = 21 + myVett[2] ---> 21 + 4 ---> 25

console.log("Somma finale " + somma)