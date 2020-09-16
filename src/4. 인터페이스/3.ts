// 읽기전용
export {};

interface Person {
    readonly name: string;
    age?: number;
}

const p1: Person = {
    name: 'mike',
}
p1.name = 'jone'; // 변경하려고하면 오류
