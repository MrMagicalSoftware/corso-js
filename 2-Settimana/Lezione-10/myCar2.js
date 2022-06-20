

class Macchina {

    constructor(modelloAuto , colore){
        this.modello = modelloAuto
        this.colore = colore
        this.velox = 30   + Math.floor(Math.random() * 170  )
    }
    vernicia(nuovoColore){
        this.colore = nuovoColore
    }
    accelera(){
        if(this.velox < 300)
            this.velox += 1  // this.velox = this.velox +1
    }
    frena(){
        if(this.velox >= 1)
            this.velox -=1
    }
    stampaInfoVeicolo(){
        return this.modello + " " + this.colore + " " + this.velox
    }
    getVelox(){
        return this.velox
    }
}






/*
//var myAuto = new Macchina("fiat" , "nera")
var myPanda = new Macchina("panda" , "rosso")

console.log('====================================');
console.log(myPanda.stampaInfoVeicolo());
console.log('====================================');
*/

var tastiera = require("prompt-sync")()

console.log("Numero di auto ???")
do {
    var numeroAuto = Number(tastiera(""))
} while (numeroAuto <= 0  );

//creo un parco auto
var automobili = []
var index = 0 

while(index < numeroAuto){
    automobili.push(   new Macchina("pandina" ,"rosso")     )
    index++
}
console.log(automobili)

const LIMITE = 130
contaMulta = 0

for(var i = 0 ; i < automobili.length ; i++){
    if(  automobili[i].getVelox()  >  LIMITE  )
        contaMulta++
}

console.log('====================================');
console.log("NUMERO DI AUTO" + automobili.length);
console.log("TOTALE MULTE " + contaMulta);
console.log(  (automobili.length * contaMulta) / 100    );
console.log('====================================');






