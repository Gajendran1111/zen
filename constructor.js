class car {
    constructor(brand,colour,price,speed){
        this.brand=brand;
        this.colour=colour;
        this.price=price;
        this.speed=speed;
    }
   out(){console.log(`I need ${this.brand} \nThe car fully coloured by ${this.colour}\n
     The minimum of car price is ${this.price} \nThe minimum of car speed is ${this.speed}`)}
   
}
const finalout = new car("KIA","black","60lakhs","240kmph");
finalout.out();

