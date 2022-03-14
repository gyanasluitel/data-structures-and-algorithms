function reverseIterative(str) {
  let reversedString = '';
  if (str.length === 0) return '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

console.log(reverseIterative(''));
console.log(reverseIterative('hello friend'));

function reverseRecursive(str) {
  if (str === '') {
    return '';
  }

  return reverseRecursive(str.substr(1)) + str.charAt(0);
}

console.log(reverseRecursive('hello friend'));
console.log(reverseRecursive(''));
