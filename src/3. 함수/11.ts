// named parameters를 다른곳에서도 쓰고싶은경우, interface로 정의

export {};

interface Param {
  name: string;
  age?: number;
  language?: string;
}

function getText({ name, age = 15, language }: Param): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
