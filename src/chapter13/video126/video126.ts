export{ };

console.log("Type variable");
//T,U,V,X,Y,Z...

const merge = <T, U> (a: T, b: U) => {
    return [a, b]
}

const a = merge<string, number>("le", 123)