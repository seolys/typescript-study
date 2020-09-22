export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

// 식별 가능한 유니온타입.
function isPerson(x: Person | Product): x is Person {
  return (x as Person).age !== undefined;
}

function print(value: Person | Product) {
  if (isPerson(value)) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
