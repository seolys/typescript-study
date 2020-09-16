// 함수타입 정의
export {};

interface GetText {
  (name: string, age: number): string;
}
// 아래의 코드와 동일함.
// type GetText = (name: string, age: number) => string

const getText: GetText = function (name, age) {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}`;
};
