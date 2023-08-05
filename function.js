function number(sum , sum2){
    console.log(sum, sum2);
    var element = sum + sum2;
    return element;
}

var total = number(15, 20);
console.log(total);


function bookShop(money){
    var bookPrise    = 20;
    var bookQuantity = money / bookPrise;
    return bookQuantity;
}

var haveMoney = bookShop(500);
console.log('now i can buy: ',haveMoney, 'book');