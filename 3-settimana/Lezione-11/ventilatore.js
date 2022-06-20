/****
 * 
 * 
 *  Ventilatore -------------->  Marca , colore , vRotazione , materiale
 *  
 * 
 *  Metodo -------------------------> const , get , set , stampaInfo , accendi, spegni
 * 
 * 
 */


class Ventilatore {

    //Attributi

    #marca
    #colore 
    #vRotazione
    #materiale

    constructor(marca, colore , materiale){
        this.#marca = marca
        
        this.colore = colore // sto chiamando il set colore.. ...

        this.materiale = materiale // sto chiamando il set materiale
        this.#vRotazione = 0
    }

    //SETTER
    set marca(marca){
        this.#marca = marca
    }

    set colore(colore){
        //definisco un vettore di colori
        var coloriDisponibili = ["giallo" , "bianco", "rosso" , "nero"]
        var found = coloriDisponibili.find(element => element == colore);

        if( found != undefined ) 
            this.#colore = found
        else
            this.#colore = coloriDisponibili[0]      
    }


    set materiale(materiale){
        this.#materiale = materiale
    }

    //GETT-----
    get marca(){
        return this.#marca
    }

    get colore(){
        return this.#colore
    }

    get vRotazione(){
        return this.#vRotazione
    }

    get materiale(){
        return this.#materiale
    }

    accendi(){
        this.#vRotazione = 30
    }
    spegni(){
        this.#vRotazione = 0
    }
    

}

var ventilatore = new Ventilatore("Ventilox" , "nero" ,"plastic" )
console.log(ventilatore.colore )
console.log(ventilatore.vRotazione)
ventilatore.accendi()
console.log(ventilatore.vRotazione)


ventilatore.spegni()
console.log(ventilatore.vRotazione)

