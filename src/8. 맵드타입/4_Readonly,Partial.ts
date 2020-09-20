export {};

interface Person {
  name: string;
  age: number;
}
type T1 = Person["name"]; // string

// T[P] : 각 속성의 원래 값의 타입을 명시한다. 즉, 값의 타입을 변화시키지 않는다는 의미.
// reanonly한 타입.
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type T2 = Readonly<Person>;
/*
type T2 = {
    readonly name: string;
    readonly age: number;
}
*/

// 선택속성으로 만들어주는 타입.
type Partial<T> = { [P in keyof T]?: T[P] };
type T3 = Partial<Person>;
/*
type T3 = {
    name?: string | undefined;
    age?: number | undefined;
}
*/

// 이렇게 맵드타입을 이용하면 마치 함수를 사용하는것처럼 사용할 수 있는데, 일종의 유틸리티 타입으로 볼 수 있다.
// Readonly, Partial은 Typescript에 내장되어있기때문에 실무에서는 타입을 만들지않고 사용할 수 있다.
