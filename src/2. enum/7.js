"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum객체에 특정value가 있는지 검사하는 util.
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] === value; });
}
/*
filter하는이유는 enum이 아래와같이 양방향매핑이 되기때문에, 한쪽방향을 걸러내기 위함이다.
enum Some {
    Key1 = 1;
}
*/
// Some['key1'] = 1;
// Some[1] = 'key1'; // 필터에 의해 걸러짐. isNaN(1)은 false이기 때문.
