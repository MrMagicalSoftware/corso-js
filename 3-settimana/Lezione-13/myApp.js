

class Persona {

    #nome
    #eta

    constructor(nome , eta){
        this.nome = nome
        this.eta = eta
    }

    get nome(){return this.#nome}
    get eta(){return this.#eta}

    set nome(nome){this.#nome = nome}
    set eta(eta){
        this.#eta = eta > 0 ? eta : -eta
    }

    stampaInfo(){
        return this.#nome + " " +this.#eta
    }

}

class Allenatore extends Persona{

    #anniEsperienza

    constructor(nome ,eta , anniEsperienza){
        super(nome , eta )
        this.anniEsperienza = anniEsperienza
    }

    get anniEsperienza(){return this.#anniEsperienza}
    set anniEsperienza(anniEsperienza){
        this.#anniEsperienza = anniEsperienza > 0 ? anniEsperienza : - anniEsperienza
    }

    stampaInfo(){
        return super.stampaInfo() + " " + this.#anniEsperienza 
    }
}

class Player extends Persona {

    #ruolo
    #numeroMaglia

    constructor(nome , eta , ruolo , numeroMaglia){
        super(nome , eta )
        this.ruolo = ruolo 
        this.numeroMaglia = numeroMaglia
    }

    get ruolo(){return this.#ruolo}
    get numeroMaglia(){return this.#numeroMaglia}

    set ruolo(ruolo){this.#ruolo = ruolo}
    set numeroMaglia(numeroMaglia){
        this.#numeroMaglia = numeroMaglia >= 1 ? numeroMaglia : - numeroMaglia 
    }
    stampaInfo(){
        return super.stampaInfo() + " " + this.#numeroMaglia + " " + this.#ruolo
    }
}


class Team {

    #nome               // string
    #numeroGiocatori    // number
    #allenatore         // un object di tipo allenatore
    #giocatori          // vettore di giocatori


    constructor(nome , numeroGiocatori){
        this.nome = nome
        this.numeroGiocatori = numeroGiocatori
        
        this.#allenatore = null
        this.#giocatori = []
    }

    get nome(){return this.#nome}
    get allenatore(){return this.#allenatore}
    set nome(nome){this.#nome = nome}
    
    set numeroGiocatori(numeroGiocatori){
        this.#numeroGiocatori = numeroGiocatori
    }
    get numeroGiocatori(){return this.#numeroGiocatori}

    aggiungiAllenatore(allenatore){
        if(this.#allenatore == null  ){
            this.#allenatore = allenatore
            return true
        }
        return false
    }

    rimuoviAllenatore(){
        this.#allenatore = null
    }

    rimuoviGiocatore(giocatore){
        var foundIndex = this.#giocatori.findIndex(gioc => gioc.nome == giocatore.nome)

        if(foundIndex != -1){
            this.#giocatori.splice(foundIndex ,1 )
            return true
        }
        return false
    }

    aggiungiGiocatore(giocatore){
        //verifico che ci sia posto e verifico 
        //che non esista due giocatori con lo stesso nome ...
        
        //console.log("leng --> " + this.#giocatori.length  + " " + this.#numeroGiocatori)
        if(this.#giocatori.length < this.#numeroGiocatori){
          
            var foundIndex = this.#giocatori.findIndex(gioc => gioc.nome == giocatore.nome)
            if(foundIndex == -1){
                //console.log("STO ADDDD")
                this.#giocatori.push(giocatore)
                return true
            }
        }
        return false
    }

    showAllTeams(){

        var infoAllenatore = this.#allenatore != null ? this.#allenatore.stampaInfo() : "NESSUNO"
        var myTeam ="Allenatore del team " +  infoAllenatore + " \n"
        this.#giocatori.forEach(player => myTeam += player.stampaInfo() + "\n" )
        return myTeam
    }

}





var team = new Team("bayeR" , 3)


var player = new Player(nome="bobo", eta= "33", ruolo="attacc", numeroMaglia="11")

team.aggiungiGiocatore(player)
team.aggiungiGiocatore(new Player(nome="bobone", eta= "18", ruolo="attacc", numeroMaglia="33"))
team.aggiungiGiocatore(new Player(nome="bobino", eta= "18", ruolo="attacc", numeroMaglia="33"))
team.aggiungiAllenatore(new Allenatore(nome="MARINI" , eta ="58" , anniEsperienza=20))


console.log();
console.log(team.showAllTeams())

team.rimuoviAllenatore()


console.log('====================================');
console.log(team.showAllTeams());
console.log('====================================');


