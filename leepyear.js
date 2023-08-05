function isLeepYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
        return false;
    
}

const thisYear2020 = isLeepYear(2020);
console.log(thisYear2020);
const thisYear2022 = isLeepYear(2022);
console.log(thisYear2022);