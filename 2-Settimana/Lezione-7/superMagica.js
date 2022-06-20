

// voglio riempire un vettore 
//senza ripetizioni a caso con elementi compresi tra 1 -90
// il vettore è grande 6 

//console.log(    Math.floor(Math.random()*90+1)  )

var vettEstratti = []

var index = 0 



while(index < 6 ){

    var generaNumero = Math.floor(Math.random()*10+1)
    var trovato = false

    for(var i = 0 ; i < vettEstratti.length ; i++){
        if(vettEstratti[i] == generaNumero){
            trovato = true
            break
        }
    }
    /*
    if(trovato == true)
        continue
    else
        vettEstratti.push(generaNumero)*/
    if(trovato == false){
        vettEstratti.push(generaNumero)
        index++
    }
    
    
}

console.log(vettEstratti)