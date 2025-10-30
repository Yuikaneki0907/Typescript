export { };

console.log("Generic Function");

function checkNumber(value: number){
    return value;
}

function checkString (value: string){
    return value;
}

function checkGeneric <T>(value: T){
    return value;
}

const a = checkGeneric<string>("le anh");
const b = checkGeneric<number>(123);

const arr = checkGeneric<number[]>([1,2,3,4])

const checkArrayGeneric = <T> (arr: T[])=>{
    return arr;
}

const arr1 = checkArrayGeneric<number>([1,2,3]);

