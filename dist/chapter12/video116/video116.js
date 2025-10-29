"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Tính đóng gói");
class Cat {
    get kindOf() {
        return this._kindOf;
    }
    set kindOf(value) {
        this._kindOf = value;
    }
    //setter
    set age(age) {
        this.age_ = age;
    }
    //getter
    get age() {
        return this.age_;
    }
    constructor(name, age, kindOf) {
        this.name = name;
        this.age_ = age;
        this._kindOf = kindOf;
    }
    makeSound() {
        console.log("Meo meo...");
    }
}
const myCat = new Cat("Miêu", 5, "meo");
myCat.age = 20; //set
const a = myCat.age; //get
