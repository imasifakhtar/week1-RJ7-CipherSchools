// 1. .map()
let array = [1, 2, 3, 4, 5];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray[i] = array[i] * array[i];
}
console.log(newArray);

let array2 = [5, 10, 15, 20];

// function functionForMap(element) {
//   return element * element;
// }

let newArray2 = array2.map((element, index) => {
  console.log(index);
  return element * element;
});

console.log(newArray2);

// 2. .forEach()
let array3 = [1, 2, 3, 4, 5];
array3.forEach((element, index) => {
  console.log(element);
});

// 3. .filter()
let array4 = [10, 20, 30, 40, 50];
let newArray4 = array4.filter((element) => {
  return element >= 30;
});

console.log(newArray4);

// 4. .find()
let array5 = [10, 20, 30, 40, 50];
let temp = array5.find((value) => {
  return value > 20;
});

console.log(temp);

// 5. .sort()
let array6 = [40, 20, 50, 10, 5];
let newArray6 = array6.sort((el1, el2) => {
  el1 = Number(el1);
  el2 = Number(el2);
  return el1 - el2;
});

console.log(newArray6);

// Object Destruction
let myObject = {
  name: "Alex",
  age: 24,
  address: {
    street: "Brooklyn",
    city: "New York",
    state: "NY",
    country: "USA",
    passportDetails: {
      passportNumber: "ABCD456EFG",
    },
  },
};

let passportNo = myObject.address.passportDetails.passportNumber;
console.log(passportNo);

// let myName = myObject.name;
// let age = myObject.age;

// console.log(myName, age);

let { name: myName, age } = myObject;
console.log(myName, age);

// Array matching
let obj1 = { name: "Asif" };
let obj2 = { name: "Asif" };

function areEqual(obj1, obj2) {
  if (obj1 == obj2) {
    return true;
  }
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
    if (typeof obj2[key] == "undefined") {
      return false;
    }
    if (obj2[key] != obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(areEqual(obj1, obj2));

// Map and Set
let map = new Map();
map.set(1, "Asif");
map.set(2, "Alex");

console.log(map);

let set = new Set();

set.add(1);
set.add(2);

console.log(set);

// Class
class Animal {
  noOfLegs;
  color;
  family;
  sound;

  constructor(noOfLegs, color, family, sound) {
    this.noOfLegs = noOfLegs;
    this.color = color;
    this.family = family;
    this.sound = sound;
  }

  showAnimal() {
    console.log(`The animal belongs to family ${this.family}`);
  }
}

let animal = new Animal(4, "brown", "rodent", "test");
console.log(animal);
animal.showAnimal();
