export {};

// 메소드명 옆에 제네릭으로 타입을 선언할 수 있다.
function makeArray<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>("empty", 10);
const arr3 = makeArray<boolean>(true, 5);

// 타입을 직접 선언하지 않아도 가능함.
const arr4 = makeArray(1, 10);
const arr5 = makeArray("empty", 10);
const arr6 = makeArray(false, 5);
const arr7 = makeArray<number | string>(2, 10);
