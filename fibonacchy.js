function add(fibo) {
  const number = [0, 1];
  for (let i = 2; i <= fibo; i++) {
    number[i] = number[i - 1] + number[i - 2];
  }
  return number;
}

const fiboNumber = 12;
const total = add(fiboNumber);
console.log(total);

const number = [0, 1];
for (let i = 2; i <= 12; i++) {
  number[i] = number[i - 1] + number[i - 2];
}
console.log(number);

// What would be the output of the code below?

// function add(a, b){
//  return a + b;
// }
// console.log(add("adam" + "eve"))

// Find the largest?

// var a = 5;
// var b = 8;
// var c = 4;
// var d = 6;
// var highest =Math.max(a, b, c, d);
// console.log(highest);

// const number = -78;
// const answer = Math.abs(number);
// console.log(answer);

var a = 2;
var b = 3;
if (a < b) {
  console.log("Hello");
}
