"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// language기본값이 string('korean')이라면 타입도 string이 된다.
// language: string = 'korean'과 동일하다.
function getText(name, age, language) {
    if (age === void 0) { age = 15; }
    if (language === void 0) { language = "korean"; }
    return "name = " + name + ", age = " + age + ", language = " + language;
}
console.log(getText("mike"));
console.log(getText("mike", 23));
console.log(getText("jone", 36, "english"));
