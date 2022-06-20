const reverseString = (parola) => {
    let parolaReverse = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
    }
    return parolaReverse;
};
console.log(reverseString("ciao"));
//creare una funzione
//in typescript che prenda in input un vettore di numeri
//conta quanti numeri pari sono presenti nel vettore..
// [ 1 ,2 , 8 , 10 , 5] ----------> 3
const contaPari = (myVett) => {
    let numeriPari = 0;
    myVett.forEach(el => el % 2 == 0 ? numeriPari++ : "");
    return numeriPari;
};
console.log('====================================');
console.log("CONTA PARI " + contaPari([1, 2, 4, 8, 88]));
console.log('====================================');
