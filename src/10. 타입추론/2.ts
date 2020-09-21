export {};
const v1 = 123; // const는 변하는값이 아니기때문에 엄격하게 타입추론이 된다. v1의 타입은 number가 아닌 123이라는 타입이 된다.
const v2 = "abc"; // v2의 타입은 abc라는 타입이 된다.
let v3: typeof v1 = 234; // 에러. 123만 넣을 수 있음. 
