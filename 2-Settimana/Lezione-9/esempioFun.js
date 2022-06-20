console.log("###############")

function fattoriale(numero){

    if(numero < 0)
        return "Non posso calcolare il fatt"
    else if(numero == 0 || numero == 1)
        return 1

    var fatt = 1

    while(numero > 1){
        fatt *= numero      // fatt = 5 * 4* 3 * 2 * 1
        numero--
    }
    return fatt

}


//console.log(fattoriale(5))


function fattRicorsivo(numero){
    
    if(numero == 1)
        return 1
    
    return numero * fattRicorsivo(numero -1 )
}

//console.log( fattRicorsivo(5))


/***
 * 
 * creare una funzione che prenda un vettore di stringhe e ritorni
    la stringa con piu' lettere a 

    Es ["ciao" , "ala" , "mia" , "casa" , "gino"] ----> casa 
    perchè casa ha 2 a 
 * 
 * 
 */

//[   "ciao"   "ala"    "aaaa" ,     "base"     ]

function trovaParolaLettereMagg(vett){

    var max = contaLettereA(vett[0])  // 1
    var index = 0

    for(var i = 1 ; i < vett.length ; i++){
        if(contaLettereA(vett[i]) > max){     /// contaLett("ala") > 1 ---> 2 > 1
            max = contaLettereA(vett[i])
            index = i
        }
    }
    return vett[index]
}

function contaLettereA(parola){

    var conta = 0 
    for(var i = 0 ; i < parola.length ; i++){
        parola[i] == 'a' || parola[i] == "A"  ?  conta++ : conta
    }
    return conta
} 


console.log(trovaParolaLettereMagg([   "ciao" ,  "ala"  ,  "aaaa" ,     "base"     ]))


