
                // 0 ----------------------------- n-1
var postiCinema = [false , false , false , false,true]
console.log(postiCinema)

var primoPostoLibero = -1

for (var index = 0; index < postiCinema.length; index++) {
   
    if(postiCinema[index] == true){
        postiCinema[index] = false
        primoPostoLibero = index
        break 
    }
    
}

console.log("################################")
console.log(postiCinema)

//&& primoPostoLibero < postiCinema.length
if(primoPostoLibero >= 0 )
    console.log("ok hai trovato posto in " + primoPostoLibero)
else
    console.log("non esiste un posto libero")

