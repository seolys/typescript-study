export {};

// 조건부타입은 입력된 제네릭 타입에 따라, 타입을 결정할 수 있는 기능이다.

// 문법 : T extends U ? X : Y

type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string | number>; // type T1 = "yes" | "no"
type T2 = IsStringType<string> | IsStringType<number>; // type T2 = "yes" | "no"

type Array2<T> = Array<T>;
type T3 = Array2<string | number>; // type T3 = (string | number)[]
