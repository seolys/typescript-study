"use strict";
// named parameters를 다른곳에서도 쓰고싶은경우, interface로 정의
Object.defineProperty(exports, "__esModule", { value: true });
function getText(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 15 : _b, language = _a.language;
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? "senior" : "junior";
    return "name: " + nameText + ", age: " + ageText + ", language: " + language;
}
