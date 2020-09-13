export {};

// enum객체에 특정value가 있는지 검사하는 util.
function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter((key) => (console.log(key, Number(key)), isNaN(Number(key))))
    .some((key) => enumObject[key] === value);
}

enum Fruit {
  Apple,
  Banana,
  Orange,
}

enum Language {
  Korean = "ko",
  English = "en",
  Japanese = "jp",
}

console.log("1 in Fruit:", getIsValidEnumValue(Fruit, 1)); // true
console.log("5 in Fruit:", getIsValidEnumValue(Fruit, 5)); // false
console.log("Orange in Fruit:", getIsValidEnumValue(Fruit, "Orange")); // false, 값이 아니고 아이템의 이름.(filter를 안했다면 true가 나왔을 것이다.)
console.log("ko in Language:", getIsValidEnumValue(Language, "ko")); // true
console.log("Korean in Language:", getIsValidEnumValue(Language, "Korean")); // false, 값이 아니고 아이템의 이름.
