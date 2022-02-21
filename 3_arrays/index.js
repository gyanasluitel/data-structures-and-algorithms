const strings = ['a', 'b', 'c', 'd']; // 4*4 = 16 bytes of storage in 32-bit system

console.log(strings[2]); // O(1)

//PUSH METHOD - ADD AT THE END OF THE ARRAY
strings.push('e'); // O(1)
console.log(strings);

// POP METHOD - REMOVE FROM THE END OF THE ARRAY
strings.pop(); // O(1)
console.log(strings);

// UNSHIFT METHOD - ADD AT THE FRONT OF THE ARRAY
strings.unshift('x'); // O(n)
console.log(strings);

//SPLICE METHOD - ADDING ITEMS AT MIDDLE OR CHOSEN POSITION
strings.splice(2, 0, 'z'); // O(n/2) ~ O(n)
console.log(strings);
