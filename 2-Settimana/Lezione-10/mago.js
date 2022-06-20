/****
 * 
 *      //Attributi
 *     pvita ---> intero : Number  >= 0
 *     isAlive --> boolean : 
 *     nomeMago ---> string
 * 
 *    //Metodi 
 * 
 *    checkVita --> controlla se il mago e' vivo
 *    setPuntiVita ---> modifica i puntiVita
 *    getPuntiVita ---> quanti punti vita ho in un determinato momento    
 * 
 *    spadata ---> infligge danno di spada
 *    folataMagica ---> infligge una folata magica
 *    pallaDiFuoco ---> inflegge danni con la palla di Fuoco
 * 
 * 
 * 
 */
class Mago {

    constructor(nomeMago , pVita){
        this.nomeMago = nomeMago
        this.pVita = pVita
        this.isAlive = true
    }
    getAlive(){
        //ritorna true se il pers è vivo altrimenti false
        return this.isAlive 
    }

    setPuntiVita(pVita){
        this.pVita = pVita

        if(this.pVita <= 0)
            this.isAlive = false  //muore il mago
    }

    getPuntiVita(){
        return this.pVita
    }

    spadata(){
        //spadata infligge un danno casuale tra 10 e 30
        return 10 + Math.floor(  Math.random() * 20       )
    }

    pallaDiFuoco(){
        //infligge danno tra 20 - 80
        return 20 +  Math.floor(  Math.random() * 60       )
    }

}



//Creiamo un mago


var gandalf = new Mago("Gandalf" , 400)
var saruman = new Mago("Saruman" , 400)

console.log(gandalf)
console.log(saruman)

var duello = 0
var tastiera = require("prompt-sync")()

while(gandalf.getAlive()  &&  saruman.getAlive() ){

    var index = Math.floor(Math.random() * 10 ) // 0 -- 10        0 1 2 3        4 5 6 7 8 9    

    if(index <= 5){
        //Gandalf
        console.log("Gandalf sta attacc  ... ..." );
        var danno = Math.floor(Math.random() * 2 ) == 1 ? 
                        (console.log("Spadata") ,gandalf.spadata() )    : (console.log("Palla di fuoco") ,
                         gandalf.pallaDiFuoco() ) 

        saruman.setPuntiVita(  saruman.getPuntiVita() - danno       )
    }
    else{
        //saruman sta attacc
        console.log("Saruman sta attacc  ... ..." );
        var danno = Math.floor(Math.random() * 2 ) == 1 ? 
                    (console.log("Spadata") ,saruman.spadata() )    : (console.log("Palla di fuoco") ,
                    saruman.pallaDiFuoco() ) 

        gandalf.setPuntiVita(  gandalf.getPuntiVita() - danno       )

    }
    console.log('====================================');
    console.log(gandalf);
    console.log(saruman);
    console.log('====================================');

    tastiera("")
    duello++
}

const mortePersonaggio = new Date();
console.log(mortePersonaggio)

console.log("vincitore -----> DUELLO " + duello)
saruman.getAlive() ?  console.log(saruman) : console.log(gandalf)







