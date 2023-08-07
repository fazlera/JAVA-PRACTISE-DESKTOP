/*
1.book1 - 100 pisces
1.book2 - 200 pisces
1.book3 - 300 pisces
*/ 

function paperRequirement(book1, book2, book3){
    if(typeof book1 !== 'number' || typeof book2 !== 'number' || typeof book3 !== 'number'){
        return 'please provide me a valid number';
    }
    else{
        const book1Paper = 100;
        const book2Paper = 200;
        const book3Paper = 300;

        if(typeof book1Paper !== 'number' || typeof book2Paper !== 'number' || typeof book3Paper !== 'number'){

            return 'please provide me a valid paper pages number'
        }

        const book1PaperCount = book1Paper * book1;
        const book2PaperCount = book2Paper * book2;
        const book3PaperCount = book3Paper * book3;
       
        const totalPaperCount = book1PaperCount + book2PaperCount + book3PaperCount;
        return totalPaperCount;
    }  

}

const totalPaper = paperRequirement(5, 5, 15);
console.log('Total Book Paper:',totalPaper,'pice');