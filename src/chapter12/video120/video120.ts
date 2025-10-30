export { };

console.log("Tính trừu tượng");

//abstract class

abstract class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract makeSound(): void;

    test () {
        console.log("This is", this.name);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("gâu gâu...")
    }
}

const myDog = new Dog("milu");
myDog.test();