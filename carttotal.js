// function cart(totalCart) {
//   let sum = 0;
//   for (let i = 0; i < totalCart.length; i++) {
//     let element = totalCart[i];
//     sum = sum + element.price;
//   }
//   return sum;
// }

// const shoppingCart = [
//   { Name: "shoes", price: 400 },
//   { Name: "shirt", price: 500 },
//   { Name: "pant", price: 700 },
//   { Name: "t-shirt", price: 300 },
// ];

// const expanse = cart(shoppingCart);
// console.log(expanse);

function cart(totalCart) {
  let sum = 0;
  for (let i = 0; i < totalCart.length; i++) {
    let element = totalCart[i];
    const totalQuantity = element.price * element.quantity;
    sum = sum + totalQuantity;
  }
  return sum;
}

const shoppingCart = [
  { Name: "shoes",  price: 400  ,  quantity: 2},
  { Name: "shirt",  price: 500  ,  quantity: 5},
  { Name: "pant",   price: 700   ,  quantity: 3},
  { Name: "t-shirt",price: 300,  quantity: 2},
];

const expanse = cart(shoppingCart);
console.log(expanse);
