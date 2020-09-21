export {};

// function func1(a: number | string = "abc", b = 10) {
function func1(a = "abc", b = 10) {
  return `${a} ${b}`;
}
func1(3, 6); // 에러(첫번째 파라메터가 문자가 아님)
const v1: number = func1("a", 1); // 에러(리턴 타입은 문자인데 v1은 number타입)

// function func2(value: number): string | number
function func2(value: number) {
  if (value < 10) {
    return value;
  } else {
    return `${value} is too big`;
  }
}
