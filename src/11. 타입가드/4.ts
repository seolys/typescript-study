export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

function print(value: Person | Product) {
  if (value instanceof Person) {
    // 인터페이스는 instanceof으로 비교하지 못함.
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
