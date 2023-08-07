function mindGame(number){
    if(typeof number !== 'number'){
        return 'please provide me a valid number';
    }
    else{
        const total = (((number * 3) + 10) / 2) - 5;
        return total;
    }
}

const positiveNumber = mindGame(5)
console.log(positiveNumber);