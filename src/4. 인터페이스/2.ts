// 선택속성
export {};

interface Person1 {
  name: string;
  age?: number;
}
const p1: Person1 = { name: "mike" };

interface Person2 {
  name: string;
  age: number | undefined;
}
const p2: Person2 = { name: "mike" }; // 오류
const p3: Person2 = { name: "mike", age: undefined }; // 오류
