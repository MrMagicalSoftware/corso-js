

var maglia = {
    id:"1",
    prezzo :50,
    descrizione :"una maglia di colore giallo",
    taglia:["s" , "l" , "xl" ,"xxl"]
}


//console.log(maglia.descrizione)
//console.log(maglia.prezzo)


class NomeClasse {
    //metodo speciale 
    constructor(){}
}

class Persona {

    constructor(nome , cognome , eta){
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
    }
    stampaPersona(){
        return this.nome + " " + this.cognome +  " " + this.eta
    }
}

//instanziare un object di persona persona


var persona1 = new Persona("gian" , "de rossi" , 18)

console.log(typeof persona1)
console.log(persona1)


var myName , cognome , age 
myName = "Marco"
cognome ="de marc"
age = 25

var persona2 = new Persona(myName , cognome , age)
console.log(persona2)

if(persona1.eta > persona2.eta)
    console.log(persona1.nome)
else
    console.log(persona2.nome)

persona1.eta > persona2.eta ?  console.log(persona1.nome) : console.log(persona2.nome)


var insiemeDiPersone = []
var index = 0

while(index < 25){
    insiemeDiPersone.push(  new Persona(generaNomeAcaso(), "" , Math.random() * 40)   )
    index++
}

function generaNomeAcaso(){
    var nomiDisp = ["eldest" , "rin" , "gin" , "al" ,"jon", "jack"]
    return nomiDisp[ Math.floor(Math.random() * nomiDisp.length )  ]
}

function stampaVettore(vett){
    for(var i = 0 ; i < vett.length ; i++)
        console.log(vett[i])
}

//stampaVettore(    insiemeDiPersone   )
//stampaVettore([1 ,2 , 4 , 5 ,5, 7 , 8])


stampaVettore(insiemeDiPersone)

insiemeDiPersone.map(el => el.eta > 30 ? console.log(el) : ""  )

var insiemeNuovo = insiemeDiPersone.map(elem => elem.eta + 1)
console.log("####################")
stampaVettore(insiemeNuovo)



/*
let myFunction = (a, b) => a * b;
function moltiplica(a , b) {
    return a * b
}
var moltiplica = (a , b) => a * b
*/

console.log( persona1.stampaPersona() )