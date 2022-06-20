

var myLista = [9 , 1 ,10 , 66, 6 , 7 , 8,8 , 6 ,1 , 1 , 7 ]

vettRisultato = []


for(var i = 0 ; i < myLista.length ; i++){
    
    var copioElemento = true
    for(var j = 0 ; j < vettRisultato.length ; j++){
        if(myLista[i] == vettRisultato[j]){  //

            copioElemento = false
            break
        }
    }
    //console.log("VETTORE RISULTATO == > " + vettRisultato)
    copioElemento ? vettRisultato.push(myLista[i]) : ""
}

console.log(vettRisultato)

