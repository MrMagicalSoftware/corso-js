
class Book {

    //Attributi 
    #autore
    #titolo
    #genere
    #numeroPagine
    #costo

    constructor(autore , titolo , genere , numeroPagine , costo){
        this.#autore = autore
        this.#titolo = titolo
        this.#genere = genere

        numeroDiPagine > 0 ? this.#numeroPagine = numeroPagine : this.#numeroPagine = - numeroDiPagine
        this.costo = costo  // chiamo il setter di costo
    }

    get autore(){
        return this.#autore
    }

    get titolo(){
        return this.#titolo
    }

    get genere(){
        return this.#genere
    }

    get numeroPagine(){
        return this.#numeroPagine
    }

    get costo(){

        return this.#costo
    }


    //Definisco tutti i set

    set autore(autore){
        this.#autore = autore
    }

    set titolo(titolo){
        this.#titolo = titolo
    }

    set genere(genere){
        this.#genere = genere
    }

    set numeroPagine(numeroPagine){
        this.#numeroPagine = numeroPagine
    }

    set costo(costo){
        costo >= 0 ?  this.#costo = costo : this.#costo = -costo
    }

    stampaInfo(){
        return  this.#titolo + " " + this.#autore + " " 
                + " COSTO " + this.#costo +  " NPAGINE " + this.#numeroPagine
    }

}

/*
var myBook = new Book("TITLE" , "AUTHOR" , "GEN" , 400 , 13 )
console.log(myBook.costo)
myBook.costo = 20
console.log(myBook.costo)
*/

var insiemeDiLibri = [] 

for(var i = 0 ; i <  10 ; i++){
    var numeroDiPagine = Math.floor(Math.random() * 950) + 50 
    var prezzoLibro = Math.floor(Math.random() * 30) + 7
    insiemeDiLibri.push( new Book("TITLE" , "AUTHOR" , "GEN" , numeroDiPagine , prezzoLibro)     )
}

insiemeDiLibri.map(  book => console.log(book.stampaInfo()   )    )

console.log('====================================');
console.log();
console.log('====================================');

var insiemeDiLibriConSconto = insiemeDiLibri.map(
    book =>{
        book.costo = book.costo -3
        return  book
    }  
) 


//console.log(insiemeDiLibriConSconto)
insiemeDiLibri.forEach(  book => console.log(book.stampaInfo()   )    )



