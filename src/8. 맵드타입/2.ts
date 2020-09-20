export {};

// 객체타입이기때문에 중괄호({})를 사용.
// 객체의 Key는 대괄호([])
// 맵드타입은 in이라는 키워드를 사용한다.
/*
type T1 = {
    prop1: boolean;
    prop2: boolean;
}
*/
type T1 = { [K in "prop1" | "prop2"]: boolean };
