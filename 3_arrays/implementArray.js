class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deleteItem = this.data[index];
    this.shiftItems(index);
    return deleteItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // shifted item to the left
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const array1 = new Array();

array1.push('Hello');
array1.push('Friends');
array1.push('How');
array1.push('Are');
array1.push('You');
array1.push('?');

console.log(array1);

array1.delete(1);
console.log(array1);
