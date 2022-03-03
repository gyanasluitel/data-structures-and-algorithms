let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhhh');
  },
};

console.log(user.age); // O(1)
user.spell = 'abra kadabra'; // 0(1)
console.log(user);
console.log(user.scream()); // O(1)
