export {};

const enum Fruit {
  Apple,
  Banana,
  Orange,
}
const fruit: Fruit = Fruit.Apple;

const enum Language {
  Korean = "ko",
  English = "en",
  Japanese = "jp",
}
const lang: Language = Language.Korean;

/* 
enum을 사용하면 컴파일 후에도 enum객체가 남아있기 때문에, 번들 파일의 불필요하게 커실 수 있다.
enum객체에 접근하지않는다면 굳이 컴파일 후에 객체로 남겨놓을 필요는 없다.
그럴때는 const enum을 사용해서 컴파일 결과에 enum의 객체를 남겨놓지 않을 수 있다.
*/

// 위 소스를 컴파일한 결과
/* 
var fruit = 0 ;
var lang = "ko" ;
*/

/*
conse enum을 사용했을 때는 당연하게도, 앞에서 작성했던 getIsValidEnumValue함수를 사용할 수는 없다.
Fruit, Language라는 객체가 없기때문이다.
 */
