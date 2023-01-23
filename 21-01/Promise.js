// Promise is a class in JS
// constructor (function)

let myPromise = new Promise((fulfilled, notFulFilled) => {
  let num1 = 10;
  let num2 = 20;
  let sum = num1 + num2;

  if (sum > 20) {
    fulfilled();
  } else {
    notFulFilled();
  }
});

// myPromise
//   .then(() => {
//     console.log(`Promise was fulfilled`);
//   })
//   .catch(() => {
//     console.log(`Promise was not fulfilled`);
//   });

function addTwoNumbers(num3, num4) {
  let sum1 = 0;
  setTimeout(() => {
    console.log(num3 + num4);
    sum1 = num3 + num4;
  }, 5000);
  console.log(`Inside addTwoNumbers`);
  return sum1;
}

// console.log(addTwoNumbers(5, 7));

function addTwoNumbers2(num5, num6) {
  return new Promise((fulfilled, notFulFilled) => {
    setTimeout(() => {
      console.log(`Inside setTimeOut`);
      fulfilled(num5 + num6);
    }, 5000);
    // notFulFilled(new Error(`An error occurred!`));
  });
}

addTwoNumbers2(8, 40)
  .then(() => {
    console.log(`Promise fulfilled`);
  })
  .catch(() => {
    console.log(`Promise not fulfilled`);
  });
