"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 15 : _b, language = _a.language;
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? "senior" : "junior";
    return "name: " + nameText + ", age: " + ageText + ", language: " + language;
}
getText({ name: "aaa", age: 11, language: "ko" });
getText({ name: "bbbb" });
