export { };

console.log("tuple")

type TTuple = [string, number, boolean];

const test: TTuple = ["lee", 21, true]

const test1: [string, number, boolean] = ["lee", 21, true]

const test2: [string, number, boolean?] = ["lee", 21]

const test3: [string, number, boolean] | [string, boolean] = ["lee", true]
