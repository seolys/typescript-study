export {};
// 타입의 범위를 줄여주는 타입스크립트의 기능.
// 타입가드를 잘 활용하면 as와 같은 단언 코드를 피할 수 있다.
// as : 개발자가 타입을 확신하는때에 as를 활용하면 타입을 강제할 수 있다. 어쩔 수 없는경우에만 사용해야 함.
function print(value: number | string) {
  if (typeof value === "number") {
    //   if (typeof value === "number" || typeof value === "object") { // 버그의 위험이 있음.
    console.log((value as number).toFixed(2));
    console.log(value.toFixed(2));
    console.log(value.trim()); // 오류
  } else {
    console.log((value as string).trim());
    console.log(value.trim());
    console.log(value.toFixed(2)); // 오류
  }
}
