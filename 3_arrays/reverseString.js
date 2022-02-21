// Method 1
function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return '---Not applicable---';
  }

  let reverseString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }

  return reverseString;
}

// Method 2
function reverseString2(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return '---Not applicable---';
  }

  let reverseString = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString.push(str[i]);
  }

  return reverseString.join('');
}

// Method 3
function reverseString3(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return '---Not applicable---';
  }
  return str.split('').reverse().join('');
}

// Method 4
const reverseString4 = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return '---Not applicable---';
  }

  return [...str].reverse().join('');
};

console.log(reverseString('Gyanas Luitel'));
console.log(reverseString(12345));
console.log(reverseString2('Hello, My name is Gyanas'));
console.log(reverseString2(12345));
console.log(reverseString3('Darth Vader'));
console.log(reverseString3(12345));
console.log(reverseString4('Darth Vader'));
console.log(reverseString4(9887654));
