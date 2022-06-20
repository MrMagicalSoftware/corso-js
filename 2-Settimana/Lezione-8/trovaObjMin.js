var dati = [
    {   
        nome : "pluto",
        eta : 18
    },
    {
        nome : "pippo",
        eta : 15
    },
    {
        nome : "paperino",
        eta : 4
    },
    {
        nome : "JJ",
        eta : 33
    }
]

var objMin = dati[0]

for(var i =1  ; i < dati.length ; i++){
    if(dati[i].eta < objMin.eta)
        objMin = dati[i]
}

console.log(objMin)