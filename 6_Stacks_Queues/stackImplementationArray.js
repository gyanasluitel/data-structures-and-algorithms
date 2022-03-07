class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }

  isEmpty() {
    if (this.length === 0) {
      return 'Empty stack';
    }
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('linda');
myStack.push('coursera');
myStack.push('edx');

console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
