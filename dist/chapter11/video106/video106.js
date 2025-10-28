"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Ep kieu type");
//Type Assertion
const btn = document.getElementById("btn");
const inp = document.getElementById("name"); // => BE
// const inp = <HTMLInputElement>document.getElementById("name") ; //=> FE
btn?.addEventListener("click", () => {
    alert(inp?.value);
});
