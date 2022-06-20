



var persona = {
    name : "Rob",
    cognome :"Mi",
    age :"15",
    stampaInfo : function(){
        return this.name + " " + this.age + " " + this.cognome
    },
    isMaggiore : function(){
        return this.age >= 18 ? true : false
    }
}

console.log(typeof persona)

console.log(persona.stampaInfo()  )
console.log(persona.isMaggiore() )


class Persona {

    constructor(nome, eta) {
      this.nome = nome;
      this.eta = eta;
    }
}
  