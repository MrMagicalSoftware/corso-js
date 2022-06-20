

/***
 * 
 * 
 *  dato il seguente vettore
 * 
 *      [ 10 , 45 , 7 , 77 ]
 * 
 *  usare la funzione findIndex per trovare l'indice del primo elemento che è maggiore di 40
 */


var vett =  [ 10 , 45 , 7 , 77 ]
var indexPrimo = vett.findIndex(el => el > 40)
console.log(indexPrimo)




var strttura = [

    {nome :"Rob" , age :33},
    {nome :"WW" , age :40},
    {nome :"ff" , age :20},
    {nome :"gg" , age :44}

]

console.log(strttura.find(el => {

    if(el.age == 20)
        return el.nome

}))



// stampare a video il nome della persona con età uguale a 20 ..
//usare find






//  [ 10 , 8 , 22 , 1 , 3 , 5 , 66 , 11 , 7 , 77 ]
// creare un nuovo vettore che contenga solamente i multipli di 2
// svolgere la soluzione usando la funzione map

