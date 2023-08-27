function Animal() {}

Animal.prototype = {
    constructor: Animal,
    describe: function() {
        console.log(`My race is ${this.race}`);
    }
};

function Dog(race, color) {
    this.race = race;
    this.color = color;
}

// Inherit properties from the Animal prototype
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor property for Dog's prototype
Dog.prototype.constructor = Dog;

// Adding Dog-specific properties to the prototype
Dog.prototype.numLegs = "4";
Dog.prototype.sound = "au au";

let albert = new Dog("golden retriever", "yellow");
let wilson = new Dog("pug", "white");

console.log(albert.race + ", " + albert.color);

console.log(albert.numLegs); // Outputs: 4

albert.describe(); // Outputs: My race is golden retriever

console.log(`\nThe constructor property is inherited from the supertype: ${albert.constructor}`);

// Corrected describe() function in Animal prototype
console.log(`\nNow the constructor of albert is ${albert.constructor}, and you can still access the properties of Animal:`);
albert.describe();