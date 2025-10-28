"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Interface");
const user = {
    age: 25,
    name: "Lee",
    language: "vn",
    sayHi: () => console.log("i'm user")
};
const user1 = {
    age: 25,
    name: "Lee",
    address: "HN",
    language: "vn",
    sayHi: () => console.log("i'm user1")
};
user.sayHi();
const dog = {
    name: "kin",
    kindOf: "mnb"
};
