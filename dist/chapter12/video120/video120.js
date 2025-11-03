console.log("Tính trừu tượng");
//abstract class
class Animal {
    constructor(name) {
        this.name = name;
    }
    test() {
        console.log("This is", this.name);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("gâu gâu...");
    }
}
const myDog = new Dog("milu");
myDog.test();
export {};
