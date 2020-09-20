export {};

// enum 타입 활용
enum Fruit {
  Apple,
  Banana,
  Orange,
}

const FRUIT_PRICE = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 1500,
  [Fruit.Orange]: 2000,
};

// 만약 Orange2가 추가되었다고 가정.
// FRUIT_PRICE에도 가격이 추가되어야하는데 깜빡하는 경우가 생길 수 있다.
// (새로운 과일이 추가되어도, FRUIT_PRICE에는 의존관계가 없기때문에 컴파일오류가 발생하지 않음.)

// 맵드타입을 이용하면 빠짐없이 입력을 할 수 있다.
// 아래와같이 타입을 지정해놓으면 새로운 타입을 추가하거나 삭제했을때 컴파일오류가 발생한다.
const FRUIT_PRICE2: { [KEY in Fruit]: number } = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 1500,
  [Fruit.Orange]: 2000,
};
