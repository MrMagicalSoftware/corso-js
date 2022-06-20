var tastiera = require("prompt-sync")()


console.log("Benvenuto premi si per giocare ")
var rispostaUtente = tastiera("")

if(rispostaUtente == "si"){
    console.log("ok iniziamo a giocare")

    //mi chiede 50 euro per entrare .. . .. continua  fino a che 
    do {
        var denaro = Number(tastiera("Quanti $ hai ? "))
    } while (denaro < 50 );
    
    //console.log("check variabile denaro " + denaro)
    var isPlayerOk = true

    //gioco
    while(denaro > 0 && isPlayerOk){

       
        var puntata = Number(tastiera("inse $"))
        // do --while ?? ?? 
        while(puntata > denaro){
            puntata = Number(tastiera("inse $"))
        }
        
        var dado1 = Math.floor(Math.random() * (6) + 1)  
        var dado2 = Math.floor(Math.random() * (6) + 1)  
        console.log(dado1 +    "  " + dado2 )
        var somma = dado1 + dado2
        
        somma == 7 ? console.log("hai vinto") : console.log("Non hai vinto")
        somma == 7 ? denaro += puntata : denaro -=puntata

        
        console.log("vUOI CONTINUARE A GIOCARE ?? premi no per uscire ")
        var continuaAGiocare = tastiera("")

        isPlayerOk = continuaAGiocare =="no" ? false : true
        
        
        console.log("############  SALDO #################### " + denaro)
    }


}else{
    console.log("alla prossima.. ..")
}