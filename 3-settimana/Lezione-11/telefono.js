
class Telefono{

    //ATTRIBUTI 
    #modello
    #marca
    #costo
    #isDualSim


    //METODI
    constructor(modello , marca , costo, isDualSim){
        this.#modello = modello
        this.#marca = marca
        
        costo > 0 ? this.#costo = costo : this.#costo = - costo
        this.#marca === "iphone" ?  this.#isDualSim = false : this.#isDualSim =isDualSim
    }
   
    //GETTING

    get modello(){
        return this.#modello
    }
    

    get costo(){
        return this.#costo
    }

    //SETTING

    set modello(nuovoModello){
        if(nuovoModello.length >= 3){
            this.#modello = nuovoModello
        }
    }


    set costo(prezzo){
        if(prezzo > 0 )
            this.#costo = prezzo
    }


    stampaTutteInfo(){
        return this.#modello + " " + this.#costo + " " + this.#isDualSim + "  Marca -> " + this.#marca
    }

    scontaTelefono(scontoDaApplicare){
        this.#costo -= scontoDaApplicare
    }

}


var telefono1 = new Telefono("xr" , "iphone", -600 , false)
console.log('====================================');
console.log(telefono1.stampaTutteInfo()   );
console.log('====================================');

console.log( telefono1.costo       )

telefono1.costo = -200
console.log( telefono1.costo       )

console.log( telefono1.marca       )







