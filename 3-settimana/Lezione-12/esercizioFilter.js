//  [ 10 , 8 , 22 , 1 , 3 , 5 , 66 , 11 , 7 , 77 ]
// creare un nuovo vettore che contenga solamente i multipli di 2
// svolgere la soluzione usando la funzione

//tradizionale
//foreach
//find


var myVett =  [ 10 , 8 , 22 , 1 , 3 , 5 , 66 , 11 , 7 , 77 ]

var resultVett = []

for(var i = 0 ; i < myVett.length ; i++){
    myVett[i] % 2 == 0  ? resultVett.push(myVett[i]) : ""
}
console.log(resultVett);

var resultVett2 = []

myVett.forEach(elm => elm % 2 == 0 ? resultVett2.push(elm) : "" )
console.log(resultVett2)


var resultVett3 = myVett.filter(elem => elem % 2 == 0 )
console.log(resultVett3);



