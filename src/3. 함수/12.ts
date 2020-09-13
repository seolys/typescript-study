export {};

// function getText(name: string, age = 15, language?: string): string {
//     const nameText = name.substr(0, 10);
//     const ageText = age >= 35 ? "senior" : "junior";
//     return `name: ${nameText}, age: ${ageText}, language: ${language}`;
//   }

// function getText({
//   name,
//   age = 15,
//   language,
// }: {
//   name: string;
//   age: number;
//   language?: string;
// }): string {
//   const nameText = name.substr(0, 10);
//   const ageText = age >= 35 ? "senior" : "junior";
//   return `name: ${nameText}, age: ${ageText}, language: ${language}`;
// }

// 메소드명(getText)에 커서를 놓고, 왼쪽에 파란색 전구아이콘을 클릭 -> 매개 변수를 구조 파괴 개채로 변환(Convert parameters to destructured object)
// before : function getText(name: string, age = 15, language?: string): string { =>
// after  : function getText({ name, age = 15, language }: { name: string; age?: number; language?: string; }): string {
function getText({
  name,
  age = 15,
  language,
}: {
  name: string;
  age?: number;
  language?: string;
}): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
