"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum객체에 특정value가 있는지 검사하는 util.
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return (console.log(key, Number(key)), isNaN(Number(key))); })
        .some(function (key) { return enumObject[key] === value; });
}
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
console.log("1 in Fruit:", getIsValidEnumValue(Fruit, 1)); // true
console.log("5 in Fruit:", getIsValidEnumValue(Fruit, 5)); // false
console.log("Orange in Fruit:", getIsValidEnumValue(Fruit, "Orange")); // false, 값이 아니고 아이템의 이름.(filter를 안했다면 true가 나왔을 것이다.)
console.log("ko in Language:", getIsValidEnumValue(Language, "ko")); // true
console.log("Korean in Language:", getIsValidEnumValue(Language, "Korean")); // false, 값이 아니고 아이템의 이름.
