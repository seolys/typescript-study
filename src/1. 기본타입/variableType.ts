export {};

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? "크다" : "작다";

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
values.push("a"); // 오류

const data: [string, number] = [msg, size];
data[0].substr(1);
data[1].substr(1); // 오류

console.log("typeof 123 => ", typeof 123);
console.log('typeof "abc" => ', typeof "abc");
console.log("typeof [1, 2, 3] => ", typeof [1, 2, 3]);
