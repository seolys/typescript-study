export {};

// key값을 선택적으로 받아 타입을 선언.
// Pick도 내장타입이라 따로 선언하지 않아도 가능.
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

interface Person {
  name: string;
  age: number;
  language: string;
}
type T1 = Pick<Person, "name" | "language">;
/*
type T1 = {
    name: string;
    language: string;
}
*/
const o1: T1 = {
  name: "John",
  language: "EN",
};

type T2 = Pick<Person, "age">;
/*
type T2 = {
    age: number;
}
*/
const o2: T2 = {
  age: 30,
};

type T3 = Pick<Person, "name" | "age">;
/*
type T3 = {
    name: string;
    age: number;
}
*/
const o3: T3 = {
  name: "seol",
  age: 32,
};
