// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [1,3,4,5]
// It should return undefined

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [1, 2, 3];
const arr3 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

function checkFirstRecurring(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
    } else {
      return arr[i];
    }
    console.log(obj);
  }

  return undefined;
} // O(n)

console.log(checkFirstRecurring(arr1));
console.log(checkFirstRecurring(arr2));
console.log(checkFirstRecurring(arr3));
