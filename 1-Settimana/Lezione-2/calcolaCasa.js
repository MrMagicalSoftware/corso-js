/*
    PRENDE IN INPUT 2 NUMERI
    METRATURA E COSTO
    -----> VALORE IMMOBILE..
*/

var prompt = require("prompt-sync")()

var metratura , costoMetro , valoreTotale

metratura  = Number(prompt("Metratura "))
costoMetro = Number(prompt("Costo al metro q "))

metratura = metratura > 0 ? metratura : - metratura
costoMetro = costoMetro > 0 ? costoMetro : - costoMetro

valoreTotale = metratura * costoMetro
console.log("VALORE TOTALE CASA  " + valoreTotale)