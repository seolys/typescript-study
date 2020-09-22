export {};

// discriminated union

interface Person {
  type: "a";
  name: string;
  age: number;
}

interface Product {
  type: "b";
  name: string;
  price: number;
}

function print(value: Person | Product) {
  if (value.type === "a") {
    // 타입가드가 동작하여 타입스크립트가 Person이라는것을 알고있음.
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
