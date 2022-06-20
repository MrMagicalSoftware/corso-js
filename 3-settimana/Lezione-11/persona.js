

class Persona {

   //Attributi di classe con # ----> private 
    #nome





    constructor(nome , age){
        this.#nome = nome
        this.#age = age
    }

   

    ottieniNome(){
        return this.#nome
    }

}


var myPersona = new Persona("gian" ,44 )


