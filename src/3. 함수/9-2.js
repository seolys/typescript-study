"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
