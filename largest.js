function findLargest(largestNumber){
    let largest = largestNumber[0];

    for(let i = 1; i < largestNumber.length; i++){

        let currentNumber = largestNumber[i];

        if(currentNumber > largest){
            largest = currentNumber;
        }
    }
    return largest;
}

const arrayNumber = [2,15,6,9,7,5,12,21,65,69];

console.log(findLargest(arrayNumber));

// let x =12; 
// console.log(x);
