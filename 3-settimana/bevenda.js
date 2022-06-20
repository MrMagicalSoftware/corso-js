class Bevenda {

    #nome
    #provenienza
    #costo
    #quantita

    constructor(nome , provenienza , costo , quantita){
        this.nome = nome
        this.provenienza = provenienza
        this.costo = costo
        this.quantita = quantita
    }

    get nome(){return this.#nome}
    get provenienza(){return this.#provenienza}
    get costo(){return this.#costo}
    get quantita(){return this.#quantita}

    set nome(nome){this.#nome = nome}
    set provenienza(provenienza){this.#provenienza = provenienza}
    set costo(costo){this.#costo = costo}
    set quantita(quantita){this.#quantita = quantita}
    stampaInfo(){return this.#nome + " " + this.#costo + " " + this.provenienza + " " + this.#quantita}
}

class BevandaAlcolica extends Bevenda{

    #gradazioneAlcolica

    constructor(nome , provenienza , costo , quantita, gradazioneAlcolica){
        super(nome , provenienza , costo , quantita)
        this.gradazioneAlcolica = gradazioneAlcolica
    }
    get gradazioneAlcolica(){return this.#gradazioneAlcolica}
    set gradazioneAlcolica(gradazioneAlcolica){
        this.#gradazioneAlcolica = gradazioneAlcolica > 0 ? gradazioneAlcolica : - gradazioneAlcolica
    }
    stampaInfo(){
        return super.stampaInfo() + " " + this.#gradazioneAlcolica
    }
}

class BevandaAnalcolica extends Bevenda{

    #isEnergyDrink

    constructor(nome , provenienza , costo , quantita,isEnergyDrink ){
        super(nome , provenienza , costo , quantita)
        this.isEnergyDrink = isEnergyDrink
    }
    get isEnergyDrink(){return this.#isEnergyDrink}
    set isEnergyDrink(isEnergyDrink){this.#isEnergyDrink = isEnergyDrink}
    stampaInfo(){
        return super.stampaInfo() + " " + this.#isEnergyDrink
    }
}



class Distributore {

    #capienzaMax
    #bevande     //è un vettore di bevande

    constructor(capienzaMax){
        this.capienzaMax = capienzaMax
        this.#bevande = []
    }

    erogaBevanda(bevanda){
        var indexFound = this.#bevande.findIndex(el => el.nome == bevanda.nome )
        
        if(indexFound != -1){
            console.log("EROGAZIONE IN CORSO  .. . ..." + indexFound)
            this.#bevande.splice(indexFound ,1 )
            console.log("lung vettore " + this.#bevande.length)

        }
        else{
            console.log("Bevanda non disponibile . ... .")
        }
    }

    aggiungiBevanda(bevanda){
        if(this.#bevande.length < this.#capienzaMax){
            this.#bevande.push(bevanda)
        }else{
            console.log("non posso piu' aggiungere bevande ... . ...")
        }
    }

    stampaDistributore(){
        this.#bevande.forEach(bevanda => console.log(  bevanda.stampaInfo()  ))
    }


    get capienzaMax(){return this.#capienzaMax}

    set capienzaMax(capienzaMax){
        if(capienzaMax > 0 )
            this.#capienzaMax = capienzaMax
        else
            this.#capienzaMax = - capienzaMax
    }

}


var myErogatore = new Distributore(3)


var myBev = new BevandaAnalcolica(nome =  "fanta", 
            provenienza ="italy", costo= 0.70, quantita= 0.33, isEnergyDrink= false)

for(var i = 0 ; i <3 ; i++){

    var nomeBevanda = Math.random() > 0.5 ? "fanta" : "cola"

    myErogatore.aggiungiBevanda(new BevandaAnalcolica(nomeBevanda, 
                 provenienza ="italy", costo= 0.70, quantita= 0.33, isEnergyDrink= false))
}        

myErogatore.stampaDistributore()

myErogatore.erogaBevanda(myBev)

console.log('====================================');
console.log();
console.log('====================================');

myErogatore.stampaDistributore()





/*
var bev = new BevandaAlcolica("RUM" , "CARACAS" , 50 , 10, 45)
console.log('====================================');
console.log(bev.stampaInfo());
console.log('====================================');
var bevAnalcolica = new BevandaAnalcolica("FANTA" , provenienza = "ITALY" ,
                                     costo = 0.90 , quantita = 0.33 , false)
console.log('====================================');
console.log(bevAnalcolica.stampaInfo());
console.log('====================================');
*/



