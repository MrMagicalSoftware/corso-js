/*
    tabella Sconti  1 -----> 20        7    EURO
                    21 ------> 30      5    EURO
                    31 ----> inf       4.50 EURO

*/

var prompt = require("prompt-sync")()

var quantita = Number( prompt("Inserisci litri > 0 "))

//quantita = quantita < 0 ? -quantita : quantita
quantita =  quantita > 0 ? quantita : - quantita // - ( -10) -> + 10

console.log("Valore inserito  ... . .  " + quantita  )

/*
if(quantita > 1 ){
    if(quantita < 20){

    }
}
*/

var costoTotale 

// 15 >=1  &&(AND) 15 <= 20 -------------------> TRUE AND   TRUE --> TRUE
if(quantita >= 1 &&  quantita <= 20){
    costoTotale = 7 * quantita
    console.log("Prezzo al litro euro 7 " + costoTotale)
}
else if(quantita >= 21 && quantita <= 30){
    costoTotale = 5 * quantita
    console.log("Prezzo al litro euro 5 " + costoTotale) 
}
else{
    costoTotale = 4.50 * quantita
    console.log("Prezzo al litro euro 4.50 " +costoTotale )
}