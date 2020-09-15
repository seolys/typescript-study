"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? "senior" : "junior";
    return "name: " + nameText + ", age: " + ageText;
}
var v1 = getText("mike", 23);
var v2 = getText("mike", "23"); // 오류. 문자를 넘길수 없음.
var v3 = getText("mike", 23); // 오류. 숫자를 리턴받을 수 없음.
