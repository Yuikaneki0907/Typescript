export {};

console.log("Generic Type");

type MyArrString = string[];
type MyArrNumber = number[];

type MyArr<T> = T[];

type Wrapper<T> = {
  data: T;
};

const a: MyArr<number> = [1, 2, 3];
const b: MyArr<string> = ["le", "anh"];

const c: Wrapper<number> = {
  data: 123,
};
