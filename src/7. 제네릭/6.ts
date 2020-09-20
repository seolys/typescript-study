export {};

interface Person {
  name: string;
  age: number;
}

// 왼쪽(Korean)이 오른쪽(Person)에 할당 가능하다는것.
// 상속(확장을 위한)에서의 extends와 제네릭(타입제한을 위한)의 extends는 동일하다.
interface Korean extends Person {
  liveInSeoul: boolean;
}

// keyof : 오른쪽에 있는 인터페이스(Person)의 모든속성 이름을 나열한것.
type T1 = keyof Person; // type T1 = "name" | "age"

// T extends Person : T는 Person에 할당 가능해야 한다.
// K extends keyof Person : K는 Person의 Key값으로 할당가능 값이어야 한다. "name" 또는 "age"
function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길동",
  age: 23,
  liveInSeoul: true,
};
const p2: Korean = {
  name: "김삿갓",
  age: 31,
  liveInSeoul: false,
};
swapProperty(p1, p2, "age");
swapProperty(p1, p2, "isProgrammer"); // 오류

// -------------------------
interface Product {
  name: string;
  price: number;
}
const pd1: Product = {
  name: "시계",
  price: 1000,
};
const pd2: Product = {
  name: "자전거",
  price: 2000,
};
swapProperty(pd1, pd2, "name"); // Person이 아니기때문에 에러.
