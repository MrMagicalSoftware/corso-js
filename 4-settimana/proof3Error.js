/****
 * 
 * 
 * Arrow function 
 * 
 * 
 */


const sommaNumeri = (numero1 , numero2) => {
    try{
        if(numero1 < 0 || numero2 < 0)
            throw "Err numero negativo"
        return numero1 + numero2
    }catch(e){
        return e
    }
}


console.log(sommaNumeri(8 , -4))