export {};

interface Person {
  name: string;
  age: number;
  language: string;
}

// K를 key로하고, T를 value로 정의된 타입.
// Record도 내장타입이다.
type Record<K extends string, T> = { [P in K]: T };
type T1 = Record<"p1" | "p2", Person>;
/*
type T1 = {
    p1: Person;
    p2: Person;
}
*/

type T2 = Record<"p1" | "p2", number>;
/*
type T2 = {
    p1: number;
    p2: number;
}
*/
