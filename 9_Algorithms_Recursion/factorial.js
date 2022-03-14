// O(n)
function findFactorialRecursive(number) {
  if (number <= 1) {
    return 1;
  }

  return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
  let answer = 1;
  if (number <= 1) {
    return 1;
  }
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

console.log('Iterative approach: ');
console.log(findFactorialIterative(5));
console.log(findFactorialIterative(2));
console.log(findFactorialIterative(1));
console.log('-------------------------');

console.log('Recursive approach: ');
console.log(findFactorialRecursive(5));
console.log(findFactorialRecursive(2));
console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(0));
