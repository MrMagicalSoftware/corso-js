/**
 * 
 * Data la struttura dati :

var dati = [

    {id : "1" , prezzo : 50 },
    {id : "2" , prezzo : 70 },
    {id : "3" , prezzo : 30 },
    {id : "4" , prezzo : 20 },
    {id : "5" , prezzo : 10 },
    {id : "6" , prezzo : 25 }
    {id : "7" , prezzo : 28 }
]

1 )trovare la media del prezzo della struttura.

2) Salvare in un vettore tutti gli obj  che
 hanno un prezzo comprezzo compreso tra 20 - 30 estremi inclisi

3) trovare l'object con prezzo minimo

4)Stabilire quanti obj hanno un prezzo superiore alla media
 * 
 * 
 * 
 */


// media 33
var dati = [
    {id : "1" , prezzo : 50 },
    {id : "2" , prezzo : 70 },
    {id : "3" , prezzo : 30 },
    {id : "4" , prezzo : 20 },
    {id : "5" , prezzo : 10 },
    {id : "6" , prezzo : 25 },
    {id : "7" , prezzo : 28 }
]

var somma = 0

for(var i = 0 ; i < dati.length ; i++){
    somma += dati[i].prezzo
}
//console.log("I VALE ------->  " + i   + " mentre length " +  dati.length)

var media = somma / dati.length
console.log("La media vale " + media)


// 2 punto
var vettRisultato = []

for(var i = 0 ; i < dati.length ; i++){
    if(dati[i].prezzo >= 20 && dati[i].prezzo <= 30)
        vettRisultato.push(dati[i])
}

console.log(vettRisultato)



// Punto 3 trovare l'obj con prezzo minimo

var minObj = dati[0]


for(var i = 1 ; i < dati.length ; i++){
    if(dati[i].prezzo < minObj.prezzo){
        minObj = dati[i]
    }
}

console.log("Object con prezzo piu' piccolo ")
console.log(minObj)


// Punto 4
// la media la conosco.. ....media
var contaObject = 0

for(var i = 0 ; i < dati.length ; i++){
    if(dati[i].prezzo > media)
        contaObject++
}

console.log("VALORI CONTATI --> " + contaObject)