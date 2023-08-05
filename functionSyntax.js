// no parameter no return
// function add(){
//     console.log('hello');
// }
// parameter + no return
// function add(x ,y){
//     console.log(x + y);
// }
// no parameter + return
// function add(){
//     const money = 500;
//     return money;
// }
// parameter + return
// function add(a , b){
//     const x = a*b;
//     return x;
// }


const myArrayNumber = [10,20,30,40,50,60,70,80,90]

function arraySum(array){

    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

const tottatl = arraySum(myArrayNumber);
console.log(tottatl);
