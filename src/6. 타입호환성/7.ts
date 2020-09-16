export {};

interface Person {
  name: string;
  age: number;
  gender: string;
}

interface Product {
  name: string;
  age: number | string;
}
const person: Person = { name: "mike", age: 23, gender: "mail" };
const product: Product = person;
