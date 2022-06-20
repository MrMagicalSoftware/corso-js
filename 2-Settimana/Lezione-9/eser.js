function dividi(numero1 , numero2){
    return numero1 / numero2
}

//var n1 = 10
//console.log(   dividi(n1 , 2)    )

function trovaMaggiore(numero1 , numero2 , numero3){

    if(numero1 >= numero2 && numero1 >= numero3)
        return numero1
    else if(numero2 >= numero1 && numero2 >= numero3)
        return numero2
    else 
        return numero3

}

function trovaMaggiore2(numero1 , numero2 , numero3){
   return Math.max(numero1 , numero2 , numero3)
}

console.log(trovaMaggiore(2 ,2, 1))
console.log(trovaMaggiore2(2 ,1, 1))



function reverseString(str){
    return str.split("").reverse().join("");
}

function reverseStringWithLoop(str){

    var myStringRev =""

    for(var i= str.length -1 ; i >= 0 ; i--){
        myStringRev += str[i]
    }
    return myStringRev
}

reverseString("dkadjsajajdsjajdja")

console.log(reverseString("ciao"))
console.log(reverseStringWithLoop("ciao"))


function numeroPari(numero){
    if(numero % 2 == 0)
        return true
    else
        return false
}

function numeroPari2(numero){
    return numero % 2 == 0 ? true : false
}


/**
 * 
 * @return Ritorna vero se il numero è presente nel vettore
 *            altrimenti ritorna falso
 * @param {*} vett Un vettore 
 * @param {*} numero Un numero 
 */
function cercaElementoNelVettore(vett , numero){

    for(var i = 0 ; i < vett.length ; i++){
        if(vett[i] == numero)    
            return true
    }

    return false
}
console.log(   cercaElementoNelVettore(   [10 ,3 , 22 , 1 ]    ,   22 )     )


//mi creo una funzione che prende un vettore e un numero
// [ 5 , 3 , 1  , 15 , 44 , 10 , 3],    10 -----------------> 15 
//const array1 = [5, 12, 8, 130, 44];
//const found = array1.find(element => element > 10);

var myVett =[15, 18, 8, 130, 10]
var found = myVett.find(element => element == 10);
console.log("--------->" +found)


function cercaPrimaOccVettMagg(vett , numero){

    for(var i = 0 ;  i < vett.length ; i++){
        if(vett[i] > numero)
            return vett[i]
    }
    return -1
}





/**
 * @return La somma tra numeri
 * @param {*} numero1 
 * @param {*} numero2 
 */
function sommaTraNumeri(numero1 , numero2){

}



//[1 , 3 , 4 ]   =========>    2    6    8 
function radd(myVett) {
  
    vettRis = []

    for(var i = 0 ; i < myVett.length ; i++){
        vettRis.push(  myVett[i] * 2 )
    }
    return vettRis
}

console.log(  radd(     [1, 3 , 4]     )          )








