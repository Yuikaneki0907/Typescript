"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Tính kế thừa");
class Parent {
    shareHouse() {
        console.log("share a house from parent");
    }
}
class Child extends Parent {
    shareHouse() {
        super.shareHouse(); //gọi từ cha
        console.log("share a house from child");
    }
}
const lee = new Child();
lee.shareHouse();
const ba = new Parent();
ba.shareHouse();
