export {};

// Overwrite는 내장된 타입은 아님.

// P in Exclude<keyof T, keyof U> : T가 U에 할당가능하면 제외. 할당 불가하면 포함.
// T가 U에 할당 불가한 프로퍼티와 U의 프로퍼티를 합친다.
type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

interface Person {
  name: string;
  age: number;
}

// Person의 age프로퍼티는 겹치기때문에 Exclude되며 name만 남음.
// Person의 name과 { age: string; nation: string }가 합쳐진다.
type T1 = Overwrite<Person, { age: string; nation: string }>;
/* 
type T1 = {
    name: string;
} & {
    age: string;
    nation: string;
}
*/

const p: T1 = {
  name: "mike",
  age: "23",
  nation: "korea",
};
