"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return "";
}
console.log(getText("mike", 1, 2, 3));
// console.log(getText("mike", 1, '2', 3)); // 오류
