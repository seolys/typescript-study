export {};

class Stack<D> {
  private items: D[] = [];
  push(item: D) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
const v1 = numberStack.pop();

const numberOrNullStack = new Stack<number | null>();
numberOrNullStack.push(5);
numberOrNullStack.push(null);

const stringStack = new Stack<string>();
stringStack.push("a");
const v2 = stringStack.pop();

let myStack: Stack<number>;
myStack = numberStack; // 가능
myStack = stringStack; // 오류
