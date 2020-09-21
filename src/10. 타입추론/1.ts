export {};

let v1 = 123; // 타입추론에 따라 number 됨.
let v2 = "abc"; // 타입추론에 따라 string이 됨.
v1 = "a"; // 에러
v2 = 456; // 에러
