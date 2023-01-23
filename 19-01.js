// 1. let, var, const
let myName = "John";
console.log(myName);

myName = "Alex";
console.log(myName);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 5));

// 2. String Interpolation
let firstName = "Asif";
let lastName = "Akhtar";

// let fullName = firstName + " " + lastName;
// console.log(fullName);
console.log(`${firstName} ${lastName}`);

// 3. Default Params
let addTwoNumbers2 = (num1 = 0, num2 = 0) => {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
};

console.log(addTwoNumbers2(4));

// 4. Rest and Spread Operator
let array = [5, 10, 15, 20, 25];

// Spread
console.log(array);
console.log(...array);

let newArray = [...array, 30, 35];
console.log(newArray);

// Rest
let testFunc = (...args) => {
  console.log(args);
};

let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
let maxOfThreeNumbers = (num1, num2, num3) =>
  Math.max(num1, Math.max(num2, num3));

// console.log(maxOfThreeNumbers(5, 1, 4));

let maxOfNumbers = (...numbers) => {
  // console.log(numbers);

  let maximum = Number.MIN_VALUE;
  for (let number of numbers) {
    maximum = Math.max(maximum, number);
  }
  return maximum;
};

console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 5. Object
let object = {
  name: "John",
  age: 24,
  //city: "New York",
  address: {
    city: "New York",
    street: "NY 23",
    country: "USA",
  },
};

// let object2 = { ...object, country: "USA" };
let object2 = { ...object };
object2.address.city = "Newark";
console.log(object);
console.log(object2);
