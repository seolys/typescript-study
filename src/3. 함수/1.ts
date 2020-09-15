export {};

function getText(name: string, age: number): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}`;
}

const v1: string = getText("mike", 23);
const v2: string = getText("mike", "23"); // 오류. 문자를 넘길수 없음.
const v3: number = getText("mike", 23); // 오류. 숫자를 리턴받을 수 없음.
