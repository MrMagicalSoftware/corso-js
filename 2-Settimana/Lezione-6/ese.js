

var temp1 = 15
var temp2 = 18
var temp3 = 22


var myVett = []

var carrelloDellaSpesa = ["popcorn" , "pasta" , "uova" , "pane"]

/*
var index = 0
for(var i = 0 , j = 6 , z = 9     ; i < carrelloDellaSpesa.length  && j > 6  && isRaining() ; i++,j++, z+=4){
    console.log(j)
}
*/

//var filmPreferiti = []

console.log(carrelloDellaSpesa)
console.log(typeof carrelloDellaSpesa)


//Add an element
carrelloDellaSpesa.push("gelato")
carrelloDellaSpesa[0] = "cono gelato"

for (var index = 0; index < carrelloDellaSpesa.length; index++) {

    console.log(  carrelloDellaSpesa[index]   )

}

console.log("###############################")

carrelloDellaSpesa.pop()
carrelloDellaSpesa.pop()

console.log(carrelloDellaSpesa)




