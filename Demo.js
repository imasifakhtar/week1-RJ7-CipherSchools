// let n = 10;

// function testFunc(a) {
//   console.log(a);
// }

// function demoFunc(b) {
//   b = n + 10;
//   testFunc(b);
// }

// demoFunc();

function demoFunc() {
  return [1, 2];
}

let [abc, def] = demoFunc();
console.log(`ABC is ${abc} and DEF is ${def}`);
