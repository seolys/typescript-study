export {};

// never : 사용안함, 미포함의 의미.
type T1 = number | string | never; // type T1 = string | number

// T가 U에 할당가능하면 제외, 할당 불가하면 포함.
type Exclude<T, U> = T extends U ? never : T;
type T2 = Exclude<1 | 3 | 5 | 7, 1 | 5 | 9>; // type T2 = 3 | 7 // 1,5,9에 할당가능한것은 제외한다.
type T3 = Exclude<string | number | (() => void), Function>; // type T3 = string | number // string,number는 Function이 아니기에 가능.

// T가 U에 할당가능하면 포함, 할당 불가하면 제외.
type Extract<T, U> = T extends U ? T : never;
type T4 = Extract<1 | 3 | 5 | 7, 1 | 5 | 9>; // type T4 = 1 | 5 // 1,5,9에 할당불가한것은 제외한다.
