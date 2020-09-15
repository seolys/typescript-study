// interface 확장

export {};

interface Person {
  name: string;
  age: number;
}

interface Programmer {
  favoriteProgrammingLanguage: String;
}

interface Korean extends Person, Programmer {
  isLiveInSeoul: boolean;
}
