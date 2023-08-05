function removeDuplicate(names){

    const uniqeNameCount = [];

    for(let i = 0; i < names.length; i++){
        let element = names[i];
        
        if(uniqeNameCount.includes(element) === false){
            uniqeNameCount.push(element)
        }
    }
    return uniqeNameCount;
}

const friend = ['abul','kabul','ebul','zabul','sabul','sabul','abul','ebul','dabul','zabul','abul'];

const uniqName = removeDuplicate(friend);
console.log(uniqName);