let name = null;
const age = undefined;
const printName = (name) => {
    if (name)
        name.toUpperCase();
    // name?.toUpperCase()
    //   name!.toUpperCase()
    console.log("name = ", name);
};
export {};
