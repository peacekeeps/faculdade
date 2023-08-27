// Declarando um supertype para meu Dog
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log(`My race is ${this.race}`);
  },
};

// Declarando meu constructor Dog
function Dog(race, color) {
  (this.race = race), (this.color = color);
}

// Determinando as propriedades do meu prototype

Dog.prototype = {
  construtor: Dog,
  numLegs: "4",
  sound: "au au",
};

// Herdando propriedades do meu prototype de um supertype
Dog.prototype = Object.create(Animal.prototype);
// => isso reescreveu meu Dog.prototype

// Para corrigir a herança do construtor como Animal
Dog.prototype.constructor = Dog;

let albert = new Dog("golden retriever", "yellow");
let wilson = new Dog("pug", "white");

// Dog.prototype.numLegs = "4";
// ==> Se eu quisesse mostrar quantas pernas meu Dog tem, precisaria inserir no prototype denovo

albert.describe();

// A propriedade constructor é compartilhada com todos os descedentes, ou seja, o constructor de albert passa a ser Animal:
console.log(`\nO construtor é herdado do supertype: ${albert.constructor}`);

console.log(`\nAgora o construtor de albert é ${albert.constructor}, mas ainda é possível acessar as propriedades do Animal:
`);
albert.describe();

// Mixins são propriedades que podem ser compartilhadas entre diferentes categorias. Um cachorro tem 4 pernas, e uma cadeira também.

let chair = {};

let numLegsMixin = function (obj) {
  obj.numLegs = 4;
};

numLegsMixin(cadeira);
numLegsMixin(albert);

console.log(`Albert has ${albert.numLegs} legs. My chair has ${cadeira.numLegs} legs.`);
// ==> Albert has 4 legs. My chair has 4 legs.

// As propriedades de um construtor tem escopo global, então, se quisermos limitar o escopo para o bloco de código, precisamos declarar a propriedade em uma variável LET

function User(userPassword) {
  let password = userPassword;

  this.getPassword = function () {
    return password;
  };
  // Criamos uma propriedade capaz de acessar a propriedade dentro do escopo de bloco
}

let roberto = new User("141697");

console.log(roberto.getPassword());
// ==> 141697
console.log(roberto.password);
// ==> undefined
console.log(roberto);

/*
===============================
Immediately Invoked Function Expression ou função imediata
=============================== 
Uma forma de criar uma função *anônima* que executa imediatamente
*/

(function () {
  console.log("\nEu sou uma função anônima e não preciso ser chamada");
})();

// Podemos criar um módulo com propriedades MIXIN de uma mesma natureza, de movimento, por exemplo:

let motionModule = (function () {
  return {
  // nossa função vai retornar um objeto com os mixins:

    walkMixin: function (obj) {
      obj.walk = function () {
        console.log("Hey, i'm walking!");
      };
    },

    runningMixin: function (obj) {
      obj.run = function () {
        console.log("Can't... Talk... I'm... Running!");
      };
    },
  };
})();

motionModule.walkMixin(roberto);

roberto.walk();
// Hey, i'm walking!