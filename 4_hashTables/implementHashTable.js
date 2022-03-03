class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // very very fast operation ~ O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    const currentBucket = this.data[index];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1)
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }

    const keysArray = [];

    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it is not an empty cell
      if (this.data[i]) {
        // but also loop through all the potential collisions
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 55);
myHashTable.set('oranges', 2);

console.log(myHashTable.keys());

// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('banana'));
// console.log(myHashTable.get('apples'));
