export {};
// mapped type
// 인터페이스 엤는 모든 속성을 optional(선택속성)로 바꾸너가 readonly로 바꾸는 일을 맵드 타입을 이용해서 할 수 있다.

interface Person {
  name: string;
  age: number;
}

interface PersonOptional {
  name?: string;
  age?: number;
}

interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}
