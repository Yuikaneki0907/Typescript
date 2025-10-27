export { };

console.log("Interface")

interface IPerson {
    name: string,
    age: number,
    address?: string,
    readonly language: string //read-only => don't rewrite
    sayHi: () => void
}

const user: IPerson = {
    age: 25,
    name: "Lee",
    language: "vn",
    sayHi: ()=> console.log("i'm user")
}

const user1: IPerson = {
    age: 25,
    name: "Lee",
    address: "HN",
    language: "vn",
    sayHi: ()=> console.log("i'm user1")
}

user.sayHi()

interface IAnimal {
    name: string
}

interface IDog extends IAnimal{
    kindOf: string
}

const dog: IDog = {
    name: "kin",
    kindOf: "mnb"
}