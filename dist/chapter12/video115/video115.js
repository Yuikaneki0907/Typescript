"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//giới hạn truy cập
console.log("Access Modifiers");
class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    //method
    makeSound() {
        console.log("bla bla", this.id);
    }
}
const dog = new Animal("dog", 1);
console.log("name: ", dog.name, "sound: ", dog.makeSound()); //không lấy đc id 
