


var index = 1 
var tabellinaCorrente = 2

while(index <= 4){  

   
    var i =1
    while(i <= 10){
        console.log(tabellinaCorrente +" * " + i + "==" + (tabellinaCorrente * i)  )
        i++
    }

    tabellinaCorrente++

    console.log("")
    index++
}


console.log("############################################")
console.log("############################################")
console.log("############################################")
console.log("############################################")
console.log("############################################")
console.log("############################################")


for(var i = 0, tabellina = 2 ; i < 4 ; i++, tabellina++){
    for(var j = 1 ; j <= 10 ; j++)
        console.log(tabellina +" * " + j + "==" + (tabellina * j)  )
    
    console.log("")
}







