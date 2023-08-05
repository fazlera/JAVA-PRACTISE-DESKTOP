const  myInfo = {
    Name    :  'apple Khan',
    Phone   : 23654789,
    Address : 'Rajshahi',
    id      : 23654
}

function add(info){
    let sentance = 'amar nam'+' '+ info.Name + ', '+ 'amar phone number '+info.Phone + ', amar addres ' + info.Address + ', amar id number '+ info.id;

    return sentance;
}

const mysentance = add(myInfo);
console.log(mysentance);