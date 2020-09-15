// 교차타입(&) : 여러 인터페이스를 하나로 합침.
export {};

interface Person {
  name: string;
  age: number;
}
interface Product {
  name: string;
  price: number;
}

type PP = Person & Product;
const pp: PP = {
  name: "a",
  age: 23,
  price: 1000,
};
