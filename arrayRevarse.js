// function compareAndSort(arr) {
//     if(!Array.isArray(arr)){
//         for(let item of arr){
//             if(typeof item !== 'number'){
//                 return 'Invalid Input'
//             }
//         }
//     }else{
//     let firstElement = arr[0];
//     let secondElement = arr[1];
    
//     if (firstElement > secondElement) {
//         return [firstElement, secondElement];
//     } else {
//         return [secondElement, firstElement];
//     }
// }
// }

// const inputArray = ["2", -3];
// const sortedArray = compareAndSort(inputArray);

// console.log(sortedArray);

// return 'Invalid Input'


function compareAndSort(arr) {
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


const inputArray = [4, -2];
const sortedArray = compareAndSort(inputArray);

console.log(sortedArray);
