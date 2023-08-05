// let x = "i live in bangladesh,i have nothing, i have a computer";
// let y = x.split(",");
// console.log(y);

let a = [1, 2, 4, 5, 6, 7, 8, 9];
let max = a[0];
for (let i = 1; i < a.length; i++) {
  let element = a[i];

  if (element > max) {
    max = element;
  }
}
console.log(max);

// let max = Math.max(1,2,4,5,6,7,8,9,);
// console.log(max);

// swap & temp
var x = 5;
var y = 7;

x = x + y;
y = x - y;
x = x - y;
console.log(x , y);
