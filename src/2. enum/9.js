"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fruit = 0 /* Apple */;
var lang = "ko" /* Korean */;
/*
enum을 사용하면 컴파일 후에도 enum객체가 남아있기 때문에, 번들 파일의 불필요하게 커실 수 있다.
enum객체에 접근하지않는다면 굳이 컴파일 후에 객체로 남겨놓을 필요는 없다.
그럴때는 const enum을 사용해서 컴파일 결과에 enum의 객체를 남겨놓지 않을 수 있다.
*/
