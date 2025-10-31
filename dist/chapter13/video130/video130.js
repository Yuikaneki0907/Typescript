"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Generic Constraints");
function logLength(value) {
    console.log(value.length);
}
logLength("leanhhh");
logLength([1, 2, 3, 4]);
function testI(value) {
    console.log(value);
}
testI({ id: 1, name: "leanh" });
// testI({name: "leanh"})
// testI({id: 1})
// testI({id: 1, name: "leanh"}, 123, leanh)
testI({ id: 1, name: "leanh", age: 21 });
class Animal {
    move() {
        console.log("moving...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
function testClass(value) {
    console.log(value.move());
    if (value instanceof Dog) {
        value.bark();
    }
}
const a1 = new Dog();
const b1 = new Animal();
testClass(a1);
testClass(b1);
//rang buoc keyof
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    name: "lee",
    age: 21,
};
getProperty(user, "name");
// getProperty(user, "email")
