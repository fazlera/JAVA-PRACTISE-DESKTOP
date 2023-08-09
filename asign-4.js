
// function cubeNumber(number) {
//     if(typeof number !== 'number'){
//         return 'Please Provide Me With A Valid Number!!!';
//     }
//     const cubeNumberCalculation = Math.pow(number,3);
//     return cubeNumberCalculation;    
    
// }




// function matchFinder(string1, string2) {

//     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
//         return 'Please Provide Me With A Valid String!!!'
//     }
    
//         if(string1.includes(string2)){
//             return true;
//         }
//         else{
//             return false;
//         }    

// }





// function sortMaker(arr) {
//         if(!Array.isArray(arr)){
//             return "Invalid Input"
//         }
//             let firstElement = arr[0];
//             let secondElement = arr[1];
    
//             if(typeof firstElement !== 'number' || typeof secondElement !== 'number' || firstElement < 0 || secondElement < 0){
//                 return "Invalid Input"
//             }
    
//             if (firstElement > secondElement) {
//                 return [firstElement, secondElement];
//             }else if(firstElement === secondElement){
//                 return "equal"
//             }
//             else {
//                 return [secondElement, firstElement];
//             }
    
//         }
    



// function findAddress(obj) {
//     if(typeof obj !== 'object'){
//         return 'Please Provide Me With A Valid Object!!!';
//     }
//     else{

//         const street  = obj.street  || "__";
//         const house   = obj.house   || "__";
//         const society = obj.society || "__";

//         const isAddress =  street +","+house +","+society;
//         return isAddress;
        
//     }
   
// }

// const myAddress = {
//     street: 10,
//     house: "",
//     society: ""
// };
// const find = findAddress(myAddress);
// console.log(find); 




// function canPay(changeArray, totalDue) {

//     if(!Array.isArray(changeArray) || changeArray.length === 0 || typeof totalDue !== 'number'){
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

//         if(arrayTotal >= totalDue){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

// }








