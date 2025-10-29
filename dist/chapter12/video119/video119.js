"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Tính đa hình");
class Dog {
    makeSound() {
        console.log("gâu gâu ...");
    }
}
class Cat {
    makeSound() {
        console.log("meo meo ...");
    }
}
const myCat = new Cat();
const myDog = new Dog();
const myPet = [myCat, myDog];
myPet.forEach((animal, index) => {
    animal.makeSound();
});
