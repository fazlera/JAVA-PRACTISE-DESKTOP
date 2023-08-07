function isInteger(number){
    if(typeof number !== 'number'){
        return 'please provide me a valid number thank you!!!';
    }
    else{
       if(number % 1 == 0){
        return true;
       }else{
        return false;
       }
    }
}

const myNumber = isInteger(4.2365)
console.log(myNumber);