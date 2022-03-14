// Given a number N return the index value of the Fibonacci sequence,
// where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of
// the 2 previous values, that means dor N=5 -> 2 + 3

// O(n)
function fibIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// O (2 ^ N) - Exponential Time Complexity
function fibRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log('Iterative: ');
console.log(fibRecursive(8));
console.log(fibRecursive(0));
console.log(fibRecursive(1));
console.log(fibRecursive(2));

console.log('------------------------');

console.log('Recursive: ');

console.log(fibIterative(8));
console.log(fibIterative(0));
console.log(fibIterative(1));
console.log(fibIterative(2));
