export {};

// 유틸리티 타입 활용.

interface Person {
  name: string;
  age: number;
  nation: string;
}

type StringProperty<T> = {
  // [K in keyof T] : T 인터페이스의 속성이름을 유니온타입으로 나열한다.
  // K는 T의 key값이 되며, K의 value타입이 string이라면 사용, 아니라면 미사용(never)
  [K in keyof T]: T[K] extends string ? K : never; // 맵드타입
};
type T0 = StringProperty<Person>;
/*
type T0 = {
    name: "name";
    age: never;
    nation: "nation";
}
*/

// keyof : 타입 값에 존재하는 모든 프로퍼티의 키값을 union 형태로 리턴.
type T0_1 = [keyof T0]; // type T0_1 = ["name" | "age" | "nation"]
type T0_2 = T0[keyof T0]; // type T0_2 = "name" | "nation" // never은 union타입에서 제거됨.
type T0_3 = T0[keyof Person]; // type T0_3 = "name" | "nation" // never은 union타입에서 제거됨.

// 인터페이스에서 값이 문자열인 속성이름을 추출하는 유닐리티 타입.
type StringPropertyNames<T> = {
  // [K in keyof T] : T 인터페이스의 속성이름을 유니온타입으로 나열한다.
  // K는 T의 key값이 되며, K의 value타입이 string이라면 사용, 아니라면 미사용(never)
  [K in keyof T]: T[K] extends string ? K : never; // 맵드타입
}[keyof T]; // [keyof T] : 대괄호를 입력하는것은 속성이름에 해당하는 값을 뽑아낸다.

type T1 = StringPropertyNames<Person>; // type T1 = "name" | "nation"

// Pick : key값을 선택적으로 받아 타입을 선언.
type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T2 = StringProperties<Person>; // Pick<Person, StringPropertyNames<Person>> => Pick<Person, "name" | "nation">
/*
type T2 = {
    name: string;
    nation: string;
}
*/
