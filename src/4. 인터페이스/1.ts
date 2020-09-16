export {};

interface Person {
  name: string;
  age: number;
}
const p1: Person = { name: "mike", age: 23 };
const p2: Person = { name: "jack", age: "ten" }; // 오류
