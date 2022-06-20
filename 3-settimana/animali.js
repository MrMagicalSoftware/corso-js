class Animale{

    #eta
    #nome

    constructor(nome , eta){
        this.nome = nome
        this.eta = eta
    }

    get nome(){
        return this.#nome
    }

    get eta(){return this.#eta}

    set nome(nome){
        this.#nome = nome
    }

    set eta(eta){
        this.#eta = eta
    }

    saluta(){
        return "ciao sono un animale"
    }

}

class Cane extends Animale {

    constructor(nome , eta){
        super(nome , eta)
    }
    saluta(){
        return "bau bau"
    }
    bark(){
        return "bark bark"
    }

}

class Gatto extends Animale{
    constructor(nome , eta){
        super(nome , eta)  // super (       )
    }
    saluta(){
        return "miao miao" 
    }
}


/*
var cane = new Cane("lucky star", 6)
var gatto = new Gatto("Gattos", 2)
console.log(cane.saluta())
console.log(gatto.saluta())
*/


var animaliDisponibili = []

for(var i = 0 ; i < 10 ; i++){
    if(Math.random() > 0.5){
        animaliDisponibili.push(new Gatto("Gattino" , 12))
    }
    else{
        animaliDisponibili.push(new Cane("Canino" , 12))
    }
}

//   gatto cane gatto gatto cane

animaliDisponibili.forEach(animale => console.log(  animale.saluta()    ))




