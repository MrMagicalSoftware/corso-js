/*
    creare un programma che prenda in input
    un numero e fino a che il numero e' negativo
    il programma continua a chiedere un n > 0

*/

var tastiera = require("prompt-sync")()

var numero = Number(tastiera(" iNSERISCI POSITIVO "))

//Semaforo... ..
while(numero < 0 ){
    numero = Number(tastiera(" iNSERISCI POSITIVO "))
}

console.log("OK POSSO ANDARE AVANTI ... ... . . ..")