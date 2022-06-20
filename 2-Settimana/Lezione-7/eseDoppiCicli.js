/**
 * 
 *                  Es base = 2
 *                      altezza = 3
 * 
 *                  
 * 
 * 
 * 
 * 
 */


var altezza , base 

altezza = 3
base = 2

var stp =""
for(var i = 0 ; i < altezza ; i++, stp=""){
    for(var j = 0 ; j < base ; j++)
        stp +="*"  //process.stdout.write("*")

    console.log(stp)
    //console.log("") // vai a capo .. ..
}


console.log("")
console.log("Fine")