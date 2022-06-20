/*
    Creare una funzione che prende in input un numero
    se il numero < 0 ---> lanciare una exception ... ..
    creare una mappa
*/
const creaMappa = (myNumber) => {
    if (myNumber < 0)
        throw "Numero negativo";
    const myMap = new Map();
    for (let i = 0; i <= 10; i++) {
        myMap.set(i + myNumber, Math.round(Math.random()));
    }
    return myMap;
};
console.log('====================================');
try {
    console.log(creaMappa(8));
}
catch (e) {
    console.log("NUMERO NEGATIVO EXC");
}
console.log('====================================');
