// 인덱스타입

export {};

interface Person {
    readonly name: string;
    age: number;
    [key: string]: string | number;
}

const p1: Person = {
    name: 'mike',
    birthday: '1997-01-01',
    age: 25,
    // age: '25' 문자열입력시 오류
}