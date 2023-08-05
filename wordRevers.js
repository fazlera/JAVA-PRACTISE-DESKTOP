function reversWord(words){
    const splitWord = words.split(' ');
    const reversWordArray = [];
    for(let i = words.length -1; i >= 0; i--){
        const element = words[i];
        reversWordArray.push(element)
        
    }
    const wordJoin = reversWordArray.join('');
    return  wordJoin;
}

const myWord = 'i live in bangladesh. i have no dog';
console.log(reversWord(myWord));;