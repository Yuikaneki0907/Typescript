export {};

console.log("Generic Constraints");

function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

logLength("leanhhh");
logLength([1, 2, 3, 4]);
// logLength(123)

interface IUser {
  id: number;
  name: string;
}

function testI<T extends IUser>(value: T) {
  console.log(value);
}
testI({ id: 1, name: "leanh" });
// testI({name: "leanh"})
// testI({id: 1})
// testI({id: 1, name: "leanh"}, 123, leanh)
testI({ id: 1, name: "leanh", age: 21 });

class Animal {
  move() {
    console.log("moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

function testClass<T extends Animal>(value: T) {
  console.log(value.move());

  if (value instanceof Dog) {
    value.bark();
  }
}

const a1 = new Dog();
const b1 = new Animal();

testClass(a1);
testClass(b1);

//rang buoc keyof
function getProperty<K extends keyof T, T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "lee",
  age: 21,
};
getProperty(user, "name");
// getProperty(user, "email")
