export { };

console.log("Default Generic Type");

function printValue<T = string>(value: T){
    return value;
}

const a = printValue("leanh");

interface ITest <T = string | boolean>{
    data: T
}

const b: ITest<number> = {
    data: 123
}
// const c: ITest = {
//     data: 123
// }
const d: ITest = {
    data: true
}