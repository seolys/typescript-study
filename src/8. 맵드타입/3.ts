export {};

// Person의 Value값은 string, number만 가능하다.
interface Person {
  name: string;
  age: number;
}

// MakeBoolean은 T의 key값을 물려받는다. 반면 value값은 boolean만 받을 수 있다.
type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;
pMap.age = undefined;
pMap.age = null; // 에러
pMap.address = false; // 에러
