export {};

// T가 함수일때, T함수의 반환타입을 뽑아준다.
// 함수타입 : (...args: any[]) => infer R
// R : 반환타입.
// infer : 타입추론을 위해 사용됨. infer을 통해 반환타입을 R이라는 변수에 담을수 있는것. infer키워드는 조건부 타입을 정의할때 extends키워드 뒤에서 이렇게 사용된다.
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type T1 = ReturnType<() => string>; // type T1 = string

function f1(s: string): number {
  return s.length;
}
type T2 = ReturnType<typeof f1>; // type T2 = number
