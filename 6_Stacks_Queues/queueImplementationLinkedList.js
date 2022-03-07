class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
  }
}

const myQyeue = new Queue();
myQyeue.enqueue('Joy');
myQyeue.enqueue('Phoebe');
myQyeue.enqueue('Rachel');
myQyeue.enqueue('Ross');
myQyeue.enqueue('Chandler');
myQyeue.enqueue('Monica');

console.log(myQyeue.peek());

myQyeue.dequeue();
myQyeue.dequeue();
myQyeue.dequeue();
myQyeue.dequeue();
myQyeue.dequeue();
myQyeue.dequeue();

console.log(myQyeue.peek());
