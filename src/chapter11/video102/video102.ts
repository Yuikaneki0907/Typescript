export { };

console.log("Intersection Type")

type TUsername = string|number; //union type => use |

type TStudent = {
    id: number,
    name: string
}

type TCoder = {
    address: string,
    language: string
}

type TProgrammer = TStudent & TCoder;

let username: TUsername = "le anh"

const dev: TProgrammer = {
    id: 123,
    name: "leee",
    address: "HN",
    language: "C++"
}