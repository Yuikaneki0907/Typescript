export { };

console.log("Tính đa hình");

interface IAnimal {
    makeSound(): void;
}

class Dog implements IAnimal {
    makeSound(): void {
        console.log("gâu gâu ...")
    }
}

class Cat implements IAnimal {
    makeSound(): void {
        console.log("meo meo ...")
    }
}

const myCat = new Cat();
const myDog = new Dog();

const myPet: IAnimal[] = [myCat, myDog];

myPet.forEach((animal, index) => {
    animal.makeSound();
})