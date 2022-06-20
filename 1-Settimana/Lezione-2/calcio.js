/**
 *      Input 3 numeri interi
 *      vitt , paregg , sconfi
 *      calco i punti
 * 
 */

var prompt = require("prompt-sync")()

var vittorie , sconfitte , pareggi

vittorie  = Number (  prompt(" Inserisci le vittorie ")  )
pareggi   = Number ( prompt("Inserisci pareggi "))
sconfitte = Number ( prompt("Sconfitte "))

var totale = (vittorie * 3 ) + pareggi

console.log("RISU FINALE ----> "+ totale)