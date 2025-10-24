"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object type
const person = {
    name: "lê anh",
    age: 21,
    address: "HN",
    isBeau: true
};
const student1 = {
    name: "le anh",
    id: 123
};
const student2 = {
    name: "leeeeee",
    id: 1234,
    phone: 1234567890
};
const printf = (person) => {
    console.log("your name is: ", person.name);
};
printf(person);
