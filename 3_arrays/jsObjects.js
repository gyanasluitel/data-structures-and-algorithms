/* REFERENCE TYPE */

// let object1 = { value: 10 };
// let object2 = object1;
// let object3 = { value: 10 };

// console.log(object1 === object2);
// console.log(object1 === object3);

// object1.value = 15;
// console.log(object1.value);
// console.log(object2.value);
// console.log(object3.value);

// console.log([] === []);

//------------------------------------------------

/* CONTEXT VS SCOPE */
// Use this two lines below in browser
// console.log(this);
// console.log(this === window);

// const object4 = {
//   a: function () {
//     console.log(this);
//   },
//   b: '5',
// };

// object4.a();

// ------------------------------------------------------

/* INSTANTIATION */
class Player {
  constructor(name, type) {
    console.log('Player ', this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('Wizard ', this);
  }

  play() {
    console.log(`WEEEEEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Gandalf', 'Healer');
// const wizard2 = new Wizard('Voldemort', 'Villain');

wizard1.introduce();
wizard1.play();
