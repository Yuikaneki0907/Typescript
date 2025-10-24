export {};

const sayHi = (name: string) => {
  console.log(`Say hi...${name}`);
};

//infer
const sum = (a: number, b: number) => {
  return a + b;
};

const sum1 = (a: number, b: number): number => {
  return a + b;
};

sayHi("Le Anh");
console.log(sum(2, 3));
