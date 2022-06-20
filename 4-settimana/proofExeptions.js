
/****
 * 
 *  Proviamo assieme a
 *  realizzare un'applicazione 
 *  che contenga il blocco try - catch - finally
 * 
 * 
 */

var tastiera = require("prompt-sync")()


try {

    console.log('quante cifre vuoi di precisione ?');
    var numeroDiCifre = Number(tastiera())

    var myNum  =  12
    myNum.toPrecision(numeroDiCifre)  
    console.log('====================================');
    console.log(myNum);
    console.log('====================================');
    console.log('ISTRUZIONE X');

    var myValue = tastiera()
    console.log(  myValue.toUpperCase());

} catch (error) {
    

 

    //se il tipo è error === error1  fai questo
    //altrimenti se error === erro2 fai questa cosa .. . . ..

    //console.log(error);
    console.log("Sono nella zona di catch")
    
    //istruzione 1
    //istruzione 2
    //istruzione 3 .. .. . ..
}
finally{
    console.log("Istruzione finale 1")
    console.log("Istruzione finale 2")
}