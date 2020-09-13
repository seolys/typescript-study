export {};

// 리턴값이 없는경우
function f1(): void {
  console.log("hello");
}

// 절대 리턴되지 않는 상황.
function f2(): never {
  throw new Error("some error");
}
function f3(): never {
  while (true) {
    // ...
  }
}

function f4(): number {
  return "야호!"; // 에러
}
function f5(): string {
  return "성공!!";
}
