/***
 * 
 *  Implementare un Conto Bancario 
 *  gli attributi del conto Bancario sono i seguenti:
 * 
 *      -Nome del C/C  ----> String
 *      -Dep $   ----> Number
 *      -Conto Attivo -----> true | false
 *  
 *      stampaInfo
 *      prelievo
 *      deposito
 * 
 * 
 *  
 */


class ContoBancario {

    constructor(nome , deposito){
        this.nome  = nome
        this.deposito = deposito
        this.isAttivo = true
    }
    
    //Setting
    setNome(nome){
        this.nome = nome
    }
    setDeposito(deposito){
        this.deposito = deposito
    }
    setAttivo(isAttivo){
        this.isAttivo = isAttivo
    }

    //Getting
    getDeposito(){
        return this.deposito
    }

    getNome(){
        return this.nome
    }

    getIsAttivo(){
        return this.isAttivo
    }

    stampaConto(){
        var stampaInfo =""
        stampaInfo = this.nome + " " + this.deposito + " " + this.isAttivo
        return stampaInfo
    }

    prelevaDenaro(sommaDaPrelevare){

        if(this.isAttivo){
           if(sommaDaPrelevare < this.deposito){
                this.deposito -= sommaDaPrelevare
           }
           else
                this.isAttivo = false 
        }

        
        //LANCIO UNA NUOVA EXCEPTION .. ... ...
    }

    depositaDenaro(sommaDaDepositare){
        this.deposito += sommaDaDepositare
    }

}


//var nomeObject = new ContoBancario()

//var|let|const  nomeObje = new NomeClasse()
var tastiera = require("prompt-sync")()

console.log("Inserisci un nome")
var nomeConto = tastiera("")

console.log("Inserisci un deposito > 0 ")

do {
    var deposito = Number(tastiera())
} while (deposito <= 0 );






var conto1 = new ContoBancario(nomeConto, deposito)
console.log('====================================');
console.log(conto1.stampaConto());
console.log('====================================');

console.log("QUANTO PRELEVARE ? ")
var sommaDaPrelevare = Number(tastiera())

conto1.prelevaDenaro(sommaDaPrelevare)

console.log('====================================');
console.log(conto1.stampaConto());
console.log('====================================');

conto1.deposito = -99


console.log('====================================');
console.log(conto1.stampaConto());
console.log('====================================');