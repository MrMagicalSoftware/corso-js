

const reverseString = (parola : string) => {
    let parolaReverse = ""
    for(let i = parola.length -1 ; i >= 0  ; i--){
        parolaReverse +=parola[i]
    }
    return parolaReverse
}

console.log(reverseString("ciao"))


//creare una funzione
//in typescript che prenda in input un vettore di numeri
//conta quanti numeri pari sono presenti nel vettore..

// [ 1 ,2 , 8 , 10 , 5] ----------> 3


const contaPari = (myVett : number[] ) => {

    let numeriPari = 0;
    myVett.forEach(el => el % 2  == 0  ? numeriPari++ : "" )
    
    return numeriPari;
}

console.log('====================================');
console.log("CONTA PARI " + contaPari(  [1 , 2 ,4 , 8  ,88 ]   )   );
console.log('====================================');




//Eserzio creare una funzione che prenda ingresso
//un vettore di numeri e un numeri
// ritorna un nuovo vettore con i multipli presenti nel vettore di partenza
// che hanno questa caratteristica :

///   [ 10 , 5 , 2, 4 ,20 , 77 , 88 , 99]  , 5    INPUT

/// ---------> [10 , 5 ,20 ]  OUTPUT