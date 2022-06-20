
const tastiera = require("prompt-sync")()
const listaDellaSpesa = () => {

    const myLista = new Set()
    do {
        myLista.add(tastiera())
    } while (myLista.size < 3);

    return myLista

}

console.log(   listaDellaSpesa()   )


// to DO  MOSTRARE COME RIMUOVE OBJECT 