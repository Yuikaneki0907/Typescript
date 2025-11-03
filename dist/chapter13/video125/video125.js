console.log("Generic Function");
function checkNumber(value) {
    return value;
}
function checkString(value) {
    return value;
}
function checkGeneric(value) {
    return value;
}
const a = checkGeneric("le anh");
const b = checkGeneric(123);
const arr = checkGeneric([1, 2, 3, 4]);
const checkArrayGeneric = (arr) => {
    return arr;
};
const arr1 = checkArrayGeneric([1, 2, 3]);
export {};
