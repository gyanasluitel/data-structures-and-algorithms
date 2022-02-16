// Check for common elements between array

// const array1 = ['a', 'b', 'c','x']
// const array2 =['z', 'y', 'i']
// should return false

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

/*------------------
SOLUTION 1
------------------------------*/
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// Not a good solution as time complexity -> O (m * n)
function checkCommonItem(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log('Solution 1: ', checkCommonItem(array1, array2));

/*---------------------
SOLUTION 2
----------------------------- */

// Time complexity - O(m + n)
// Space complexity - O(m)
function checkCommonItem2(array1, array2) {
  // loop through first array and create object where properties === items in the array
  let map = {};

  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item in second array exits on the created object
  for (let i = 0; i < array2.length; i++) {
    if (map[array2[i]]) {
      return true;
    }
  }
  return false;
}

console.log('Solution 2: ', checkCommonItem2(array1, array2));
