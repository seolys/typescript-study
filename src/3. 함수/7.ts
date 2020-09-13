// prototype
export {};

// function getParam(this: string, index: number): string { return ""; }

// String.prototype.getParam = getParam;
// console.log("asdf, 1234, ok ".getParam(1));

function getParam(this: string, index: number): string {
  return "";
}

interface String {
  getParam(this: string, index: number): string;
}

String.prototype.getParam = getParam;
console.log("asdf, 1234, ok ".getParam(1));
