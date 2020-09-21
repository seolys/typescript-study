export {};

type Unpacked<T> = T extends (infer U)[] // 입력된 T라는 타입이 어떤 값의 배열이면, 그 배열의 아이템(타입)을 사용한다.
  ? U
  : T extends (...args: any[]) => infer U // 함수에 할당가능한 타입이라면 함수의 반환타입을 사용한다.
  ? U
  : T extends Promise<infer U> // Promise에 할당가능한 타입이라면 Promise의 값인 U를 사용한다.
  ? U
  : T;

type T0 = Unpacked<string>; // type T0 = string // 모든 조건에 만족하는것이 없음. 마지막 T에 해당.
type T1 = Unpacked<string[]>; // type T1 = string // 첫번째 조건에 해당.
type T2 = Unpacked<() => string>; // type T2 = string // 두번째 조건에 해당.
type T3 = Unpacked<Promise<string>>; // type T3 = string // 세번째 조건에 해당.
type T4 = Unpacked<Promise<string>[]>; // type T4 = Promise<string> // 배열(Promise<string>[])이기때문에, 첫번째 조건에 걸림. 그래서 Promise<string>가 된다.
type T5 = Unpacked<Unpacked<Promise<string>[]>>; // type T5 = string // 배열(Promise<string>[])이기때문에, 첫번째 조건에 걸림. 그래서 Promise<string>가 된 후 한번더 Unpacked를 하기때문에 세번째 조건에 해당하여 string이 된다.
