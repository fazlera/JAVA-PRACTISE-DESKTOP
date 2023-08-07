function isLGSeven(number){
 if(typeof number !== 'number'){
    return 'please provide me a valid number';
 }
 else{
    if(number < 7){
        return number - 7;
    }
    else if(number > 7){
        return number * 2
    }
 }
}

const inputNumber = isLGSeven(15);
console.log(inputNumber);