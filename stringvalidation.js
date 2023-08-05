function findVowel(s){
    if(typeof s !== 'string'){
        return 'please provide me the string value'
    }
    let vowel         = 0;
    let consonant     = 0;
    let space         = 0;
    let vowelArray    = [];
    let consonantArr  = []

    for(let i = 0; i < s.length; i++){
        let char = s[i].toLocaleLowerCase();

        if(char === 'a'||char === 'e'|| char === 'i'||char === 'o'|| char === 'u'){
            vowel++;
            vowelArray.push(char);
        }else if(char !== ' '){
             consonant++;
             consonantArr.push(char)
        }else{
             space++;
        }
    }
    
    let obj = {
        vowelCount:  vowel,
        consonantCount:consonant,
        spaceCount:space,
        vowelArray:vowelArray,
        consonantArr:consonantArr

    }
    return obj;
    
}  
const sentence = 'the name Of Our country is bangladesh'
console.log(findVowel(sentence));