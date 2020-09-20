export {};

// 함수 오버로드
// 필요한 타입을 정의 후 로직을 작성.
// 하지만 타입을 추가할때마다 코드도 추가되어야 한다.
function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
// function makeArray(defaultValue: boolean, size: number): string[]; // 코드 추가 필요.
function makeArray(
  defaultValue: number | string,
  size: number | string
): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray(1, 10);
const arr2 = makeArray("empty", 10);
