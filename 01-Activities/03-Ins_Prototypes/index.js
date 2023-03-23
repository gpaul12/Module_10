// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.nap = function () {
  console.log(this.name + " says....Zzzzzzzzz");
};

const dog = new Dog("Rex", 2, "Bulldog");
const dog2 = new Dog("Fido", 7, "Labador");

dog.nap();
dog2.nap();
