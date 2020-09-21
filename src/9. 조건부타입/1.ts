export {};

// 조건부타입은 입력된 제네릭 타입에 따라, 타입을 결정할 수 있는 기능이다.

// 문법 : T extends U ? X : Y

type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string>; // type T1 = "yes" => yes라는 타입
type T2 = IsStringType<number>; // type T2 = "no" => no라는 타입
