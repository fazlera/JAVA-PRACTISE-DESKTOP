function compareAndSort(arr){
   if(!Array.isArray(arr) || arr < 0){
    return "Invalid Input"
   }else{
    let firstElement = arr[0];
    let secondElement = arr[1];
    
    if (firstElement > secondElement) {
        return [firstElement, secondElement];
    } else {
        return [secondElement, firstElement];
    }
  }
}

const inputArray = ["2", -3];
const sortedArray = compareAndSort(inputArray);

console.log(sortedArray);

// return 'Invalid Input'

// if(!Array.isArray(arr)){
//     for(let item of arr){
//         if(item < 0){
//             return 'Invalid Input'
//         }
//         if(typeof item !== 'number'){
//             return 'Invalid Input'
//         }
//     }
// }else{
// let firstElement = arr[0];
// let secondElement = arr[1];

// if (firstElement > secondElement) {
//     return [firstElement, secondElement];
// } else {
//     return [secondElement, firstElement];
// }