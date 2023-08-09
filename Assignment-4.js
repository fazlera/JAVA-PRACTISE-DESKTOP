/* 1.Problem
function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please Provide Me With A Valid Number!!!';
    }
    const cubeNumberCalculation = Math.pow(number,3);
    return cubeNumberCalculation;    
    
}
console.log(cubeNumber(3));
console.log(cubeNumber(4)); */



// function matchFinder(string1, string2) {

//     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
//         return 'Please Provide Me With A Valid String!!!'
//     }
    
//         if(string1.includes("ohn") === string2.includes("ohn")){
//             return true;
//         }
//         else{
//             return false;
//         }    

// }


// console.log(matchFinder("John","ohn"));
// console.log(matchFinder("JavaScript","Code"));
// console.log(matchFinder("Peter Parker","Pen"));
// console.log(matchFinder("Peter Parker","pet"));


// 3.Problem

// function findAddress(obj) {
//     if(typeof obj !== 'object'){
//         return 'Please Provide Me With A Valid Object!!!';
//     }
//     else{

//         let street  = obj.street  || "__";
//         let house   = obj.house   || "__";
//         let society = obj.society || "__,__";

//         let isAddress =  street +","+house +","+society;
//         return isAddress;
        
//     }
// }

// const myAddress = {
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect"
// };
// const find = findAddress(myAddress);
// console.log(find); 

//  4.Problem 

// function canPay(changeArray, totalDue) {

//     if(!Array.isArray(changeArray) || typeof totalDue !== 'number'){
//         return 'Please Provide Me With A Valid Array & Number!!!'
//     }
//     else{
//         let arrayTotal = 0;

//         for(let item of changeArray){
//             if(typeof item !== 'number'){
//                 return 'Please Provide Me With A Valid Array Number!!!'
//             }
//             arrayTotal =  item + arrayTotal;
//         }

//         if(arrayTotal > totalDue{
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

// }
// console.log(canPay([1,2,5],10));  
// console.log(canPay([1,5,5],10));  



function sortMaker(arr) {
    if(!Array.isArray(arr)){
        return "Invalid Input"
    }
        let firstElement = arr[0];
        let secondElement = arr[1];

        if(typeof firstElement !== 'number' || typeof secondElement !== 'number' || firstElement < 0 || secondElement < 0){
            return "Invalid Input"
        }

        if (firstElement > secondElement) {
            return [firstElement, secondElement];
        }else if(firstElement > secondElement){
            return [firstElement, secondElement];
        }else if(firstElement === secondElement){
            return "equal"
        }else if(firstElement > secondElement){
            return [firstElement, secondElement];
        }

        else {
            return [secondElement, firstElement];
        }
    }


const inputArray = [4, 10];
const sortedArray = sortMaker(inputArray);

console.log(sortedArray);




