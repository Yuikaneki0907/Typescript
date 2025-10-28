export { };

console.log("constructor")

class Person {
    name: string;
    age: number;

    //Hàm tạo constructor
    //overload 
    constructor();
    constructor(name: string, age: number);

    constructor(name?: string, age?: number){
        this.name = name ?? "unknow";
        this.age = age ?? 0;
    }

    tell(){
        console.log("My name is", this.name)
    }
}

const person1 = new Person("Lê", 21)
person1.tell()

const person2 = new Person()