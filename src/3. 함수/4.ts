export {};

// language기본값이 string('korean')이라면 타입도 string이 된다.
// language: string = 'korean'과 동일하다.
function getText(name: string, age: number = 15, language = "korean"): string {
  return `name = ${name}, age = ${age}, language = ${language}`;
}

console.log(getText("mike"));
console.log(getText("mike", 23));
console.log(getText("jone", 36, "english"));
