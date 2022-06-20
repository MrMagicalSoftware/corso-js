class Car {

    constructor(modello , colore ,vAttuale){
        this.modello = modello
        this.colore =colore
        this.vAttuale = vAttuale
    }
    myVelox(){
        return this.vAttuale
    }
    accelera(){
        this.vAttuale = this.vAttuale + 1 // this.vAttuale = this.vAttuale +1
    }

}

var myCar =new Car("fiat" , "nera" , 0)
myCar.accelera()
myCar.accelera()
console.log(myCar.myVelox())








