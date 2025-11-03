console.log("constructor");
class Person {
    constructor(name, age) {
        this.name = name ?? "unknow";
        this.age = age ?? 0;
    }
    tell() {
        console.log("My name is", this.name);
    }
}
const person1 = new Person("Lê", 21);
person1.tell();
const person2 = new Person();
export {};
