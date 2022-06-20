/***
 * 
 * 
 * 
 * 
 */


function maggiore(numero1 , numero2){
    if(numero1 >= numero2)
        return numero1
    else
        return numero2
}

function maggiore2(numero1 , numero2){
    return numero1 >= numero2 ? numero1 : numero2
}



function stampaMaggioreStringa(parola1 , parola2){
    if(parola1.length > parola2.length)
        return parola1
    else if(parola1.length == parola2.length)
        return parola1 + " " + parola2
    else
        return parola2

}

console.log(stampaMaggioreStringa("ciao" ,"miao"))


function equals(parola1 , parola2){
    return parola1 === parola2 ? true : false
}

console.log(    equals("1" , 1)    )