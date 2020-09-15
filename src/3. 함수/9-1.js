"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 문자열을 반환한다.
// 두 매개변수가 모두 숫자이면 숫자를 반환한다.
// 두 매개변수를 서로 다른 타입으로 입력하면 안 된다.
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        var result = Number(x) + Number(y);
        return result.toString();
    }
}
var v1 = add(1, 2);
console.log(add(1, "2"));
