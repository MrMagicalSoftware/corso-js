

class Persona {

    #nome
    #cognome
    #eta

    constructor(nome , cognome ,eta){
        this.nome = nome
        this.cognome = cognome
        this.eta  = eta
    }

    get nome(){
        return this.#nome
    }

    get cognome(){
        return this.#cognome
    }

    get eta(){
        return this.#eta
    }

    set nome(nome){
        this.#nome =nome.charAt(0).toUpperCase() + nome.slice(1)
    }

    set cognome(cognome){
        this.#cognome = cognome
    }
    set eta(eta){
        if(eta > 0)
            this.#eta = eta
        else
            this.#eta = -eta
    }
    saluta(){
        return this.#nome + " " + this.#cognome + " " +this.#eta
    }
}


// La classe studente eredita attributi e metodi 
//dalla classe padre ovvero dalla classe persona
//quindi studente dispone di tutti i metodi del padre
//e puo' anche aggiungerne di nuovi cosi' come gli attributis
class Studente extends Persona {
    
    #matricola

    constructor(matricola, nome , cognome ,eta){
        super(nome , cognome , eta) // chiama il costruttore della superclasse(padre)
        this.matricola = matricola
    }

    set matricola(matricola){
        this.#matricola = matricola
    }

    get matricola(){
        return this.#matricola
    }

    //overriding del metodo saluta
    saluta(){
        return "ciao sono uno studente "+ this.#matricola + " " + super.saluta()
    }
    //get -set  saluta ---
}



var stud = new Studente("7765FF","PAOLO" , "ROSSI" , 27, )


console.log(stud.saluta())