export {};

const arr1 = [10, 20, 30];
const [n1, n2, n3] = arr1;
arr1.push("a"); // 에러.
arr1.push(40);


const obj = { id: "abcd", age: 123, language: "korean" };
const { id, age, language } = obj;
console.log(id === age); // 에러.
console.log(id === language); // 에러.