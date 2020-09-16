// 객체가 interface에 정의되지않은 속성값을 가지고있어도 할당 가능.
export {};

interface Person {
    readonly name: string;
    age?: number;
}

const p2 = {
    name: 'mike',
    birthday: '1997-01-01'
}
const p3: Person = p2; // 가능

const p4: Person = { 
    name: "mike",
    birthday: '1997-01-01' // 오류
}


