export {};

let v1: (1 | 3 | 5) & (3 | 5 | 7); // 합집합
v1 = 3;
v1 = 5;
v1 = 1; // 1, 7 사용불가.
