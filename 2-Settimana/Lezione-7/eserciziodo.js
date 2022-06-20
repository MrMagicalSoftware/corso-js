
//process.stdout.write("hello: "); // print

for(var i = 0,num = 1; i < 3 ; i++,num++){
    var myRow = ""
    for(var j =0 ; j < 6 ; j++)
        myRow +=num + " "

    console.log(myRow)
}

console.log("#######################")

//process.stdout.write("ciao  ")
//process.stdout.write("a tutti: ")

for(var i = 0 , num = 1 ; i < 3 ; i++, num++){

    for(var j =0 ; j < 6 ; j++){
        process.stdout.write(num + " ")
    }

    console.log()

}
