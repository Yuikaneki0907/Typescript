export { };

//object type

const person: {
    name: string;
    age: number;
    address: string;
    isBeau: boolean;
} = {
    name: "lê anh",
    age: 21,
    address: "HN",
    isBeau: true
}

const student1: {
    name: string;
    id: number;
    phone?: number;
} = {
    name: "le anh",
    id: 123
}

const student2: {
    name: string;
    id: number;
    phone?: number;
} = {
    name: "leeeeee",
    id: 1234,
    phone: 1234567890
}

const printf = (person : {
    name: string;
    age: number;
    address: string;
    isBeau: boolean;
}) => {
    console.log("your name is: ", person.name)
}

printf(person)