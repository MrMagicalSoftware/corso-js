

/***
 * 
 *  costo - colore  marca digitale
 * 
 * 
 */


class Orologio {

    #costo
    #colore
    #marca
    #isDigital

    constructor(marca , colore , costo, isDigital){
        this.#marca = marca
        this.#colore = colore
        this.#costo = costo
        this.#isDigital = isDigital
    }

    set marca(marca){
        this.#marca = marca
    }

    set colore(colore){
        this.#colore = colore
    }

    set costo(costo){
        this.#costo = costo
    }

    set isDigital(isDigital){
        this.#isDigital = isDigital
    }

    get marca(){
        return this.#marca
    }

    get colore(){
        return this.#colore
    }

    get costo(){
        return this.#costo
    }

    get isDigital(){
        return this.#isDigital
    }

    stampaInfo(){
        return this.#colore + " " + this.#costo + " " + this.#marca + " " + this.isDigital
    }

}

class Venditore {
    
    #nomeStore
    #prodotti

    constructor(nomeStore){
        this.#nomeStore = nomeStore
        this.#prodotti = []  //vettore vuoto di elementi
    }

    get nomeStore(){
        return this.#nomeStore
    }

    aggiungiProdottoAllaVetrina(prodottoDaAggiungere){
        this.#prodotti.push(prodottoDaAggiungere)
    }

    vendiProdotto(prodottoDaVendere){
        //1 -cercarlo nello store  ---> ovvero nel vettore
        //se esiste rimuovo il prodotto e se voglio ritorno il prodotto.. ...
        var prodottoTrovato = this.#prodotti.findIndex(elemento =>  elemento.marca == prodottoDaVendere.marca )
        
        if(prodottoTrovato != -1){
            //significa esiste quel prodotto
            this.#prodotti.splice( prodottoTrovato, 1)
        }
    }

  

    stampaStore(){
        this.#prodotti.forEach(elem => console.log(elem.stampaInfo()))
    }


}


var venditore = new Venditore("AliBaba")

venditore.aggiungiProdottoAllaVetrina( new Orologio("watch1" , "bianco" , 200 , false) )
venditore.aggiungiProdottoAllaVetrina( new Orologio("watch1" , "bianco" , 100 , false) )
venditore.stampaStore()
console.log('====================================');
console.log();
console.log('====================================');

venditore.aggiungiProdottoAllaVetrina( new Orologio("watch3" , "bianco" , 400 , false) )
venditore.aggiungiProdottoAllaVetrina( new Orologio("watch4" , "bianco" , 500 , false) )



venditore.vendiProdotto( new Orologio("watch1" , "bianco" , 400 , false) )
venditore.stampaStore()
