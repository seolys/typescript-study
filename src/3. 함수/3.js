"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age, language) {
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? "senior" : "junior";
    var languageText = language ? language.substr(0, 10) : "";
    return "name: " + nameText + ", age: " + ageText + ", language: " + languageText;
}
getText("mike", 23, "ko");
getText("mike", 23);
// getText("mike", 23, 123); // 오류
// function getText2(name: string, language?: string, age: number, ): string { // 오류
function getText2(name, language, age) {
    // 오류
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? "senior" : "junior";
    var languageText = language ? language.substr(0, 10) : "";
    return "name: " + nameText + ", age: " + ageText + ", language: " + languageText;
}
getText2("mike", undefined, 23);
