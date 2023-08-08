/*function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please Provide Me With A Valid Number!!!';
    }
    const cubeNumberCalculation = Math.pow(number,3);
    return cubeNumberCalculation;    
    
}
console.log(cubeNumber(3));
console.log(cubeNumber(4));

// function matchFinder(string1, string2) {

//     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
//         return 'Please Provide Me With A Valid String!!!'
//     }
//     else{
//         if(string1.includes("ohn") === string2.includes("ohn")){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

// }


// const myString = matchFinder("John","ohn");
// console.log(myString);




function findAddress(obj) {
    if(typeof obj !== 'object'){
        return 'Please Provide Me With A Valid Object!!!';
    }
    else{

        let street  = obj.street  || "__";
        let house   = obj.house   || "__";
        let society = obj.society || "__,__";

        let isAddress =  street +","+house +","+society;
        return isAddress;
        
    }
}

const myAddress = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};
const find = findAddress(myAddress);
console.log(find);*/








