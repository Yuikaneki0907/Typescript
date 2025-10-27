export {};

type TName = string | null;

let name: TName = null;

const age = undefined;

const printName = (name: string | null) => {
  if (name) name.toUpperCase(); 
// name?.toUpperCase()
//   name!.toUpperCase()
  console.log("name = ", name);
};
