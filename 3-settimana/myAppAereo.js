
class Persona {
    #nome
    #eta

    constructor(nome, eta) {
        this.nome = nome
        this.eta = eta
    }

    get nome() { return this.#nome }
    get eta() { return this.#eta }
    set nome(nome) { this.#nome = nome }
    set eta(eta) { this.#eta = eta }

    stampaInfo() {
        console.log("nome: " + this.#nome + " eta: " + this.#eta)
    }
}


class Passegero extends Persona {
    #cartaDiImbarco
    #codiceFiscale
    constructor(nome, eta) {
        super(nome, eta)
        this.#cartaDiImbarco = this.#generaCodice()
        this.#codiceFiscale = this.#generaCodice()
    }
    get cartaDiImbarco() { return this.#cartaDiImbarco }
    get codiceFiscale() { return this.#codiceFiscale }
    

    /*
    set cartaDiImbarco(cartaDiImbarco) { this.#cartaDiImbarco = cartaDiImbarco }
    set codiceFiscale(codiceFiscale) {
        this.#codiceFiscale = codiceFiscale
    }*/

    #generaCodice(){
        var generata = ""
        var elementi = "ABCDEFGHILMNOPQRSTUVZ0123456789"
        for(var i = 0 ; i < 10 ; i++){
            generata += elementi[Math.floor(Math.random() * elementi.length )   ]
        }
        return generata
    }


    stampaInfo() {
        super.stampaInfo()
        console.log("carta di imbarco: " + this.cartaDiImbarco + " codice fiscale: " + this.codiceFiscale)
    }
}

class Capitano extends Persona {
    #oreDiSperienza

    constructor(nome, eta, oreDiSperienza) {
        super(nome, eta)
        this.oreDiSperienza = oreDiSperienza
    }
    get oreDiSperienza() { return this.#oreDiSperienza }
    set oreDiSperienza(oreDiSperienza) { this.#oreDiSperienza = oreDiSperienza }
    stampaInfo() {
        super.stampaInfo()
        console.log("ore di sperienza: " + this.oreDiSperienza)
    }
}


//testo
/*
var persona = new Persona(nome="ross" , eta=33 )
persona.stampaInfo()
var passeggero1 = new Passegero(nome="jimmy", eta= 22)
console.log(passeggero1.codiceFiscale)
passeggero1.stampaInfo()
var cap = new Capitano(nome="JINJIN" ,eta=35 , oreDiSperienza =10)
cap.stampaInfo()
*/


class Aereo {

    #id             //string
    #capienzaMax    //number
    #oreNecessarie  //number
    #personeAbordo  //array di persone


    constructor(id , capienzaMax , oreNecessarie){
        
        //to do con i metodi setter 
        this.#id = id
        this.#capienzaMax = capienzaMax
        this.#oreNecessarie = oreNecessarie
        this.#personeAbordo = []

    }

    aggiungiPersona(persona){

        if(persona instanceof Capitano)
            return false
        
        if(this.#capienzaMax -1 > this.#personeAbordo.length){
            
            var cerca = this.#personeAbordo.findIndex(per => per.nome == persona.nome)

            if( cerca == -1 ){
                this.#personeAbordo.push(persona)
                return true
            }

        }
        return false

    }

    aggiungiCapitano(capitano){
        var cercaCapitano = this.#personeAbordo.findIndex(persona => persona instanceof Capitano)
        if(cercaCapitano == -1 && capitano.oreDiSperienza >= this.#oreNecessarie){
            this.#personeAbordo.push(capitano)
            return true
        }
        return false
    }

    stampaTuttePersone(){
        this.#personeAbordo.forEach(persona =>persona.stampaInfo())
    }


}


var capitano = new Capitano(nome="jj", eta=30 , ore=1)
var capitano2 = new Capitano(nome="jj2", eta=30 , ore=10)

var aereo = new Aereo(id="DFSADFAF" , capienza = 5 , oreNecessarie = 5)

aereo.aggiungiCapitano(capitano)
aereo.aggiungiCapitano(capitano2)
aereo.stampaTuttePersone()
