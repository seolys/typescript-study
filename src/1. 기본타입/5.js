"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 리턴값이 없는경우
function f1() {
    console.log("hello");
}
// 절대 리턴되지 않는 상황.
function f2() {
    throw new Error("some error");
}
function f3() {
    while (true) {
        // ...
    }
}
function f4() {
    return "야호!"; // 에러
}
function f5() {
    return "성공!!";
}
