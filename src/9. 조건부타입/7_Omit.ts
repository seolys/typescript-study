export {};

// T에서 U들을 제거한다.(U는 T의 타입목록)
type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

interface Person {
  name: string;
  age: number;
  nation: string;
}

type T1 = Omit<Person, "nation" | "age">; // Person에서 nation과 age를 제거한 타입.
/*
type T1 = {
    name: string;
}
*/
