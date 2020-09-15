// 함수 속성값 정의
export {};

interface GetText {
  (name: string, age: number): string;
  totalCall?: number;
}
// 아래의 코드와 동일함.
// type GetText = (name: string, age: number) => string

const getText: GetText = function (name, age) {
  if (getText.totalCall !== undefined) {
    getText.totalCall += 1;
    console.log(`totalCall: ${getText.totalCall}`);
  }
  return ``;
};

getText.totalCall = 0;
getText("", 0);
getText("", 0);

/*
totalCall: 1
totalCall: 2
*/
