var myNumber = [25, 23, 45, 84, 78, 65, 45, 32, 49, 19];

function getSumOfAnArray(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){

        const index   = i;
        const element = number[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

const first =  getSumOfAnArray(myNumber);
console.log(first);

