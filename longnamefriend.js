function bestFriend(largestName) {
  if (!Array.isArray(largestName.length)) {
    return "please provide me of an array";
  } else {
    let largestFriend = [0];

    for (const item of largestName) {
      if (item.length > largestFriend.length) {
        largestFriend = item;
      }
    }
    return largestFriend;

    // for(let i = 1; i <largestName.length; i++){
    //     const item = largestName[i];
    //     if(item.length > largestFriend.length){
    //         largestFriend = item;

    //     }
    // } return largestFriend;
  }
}

const friends = [
  "shajid",
  "mamun",
  "kamal",
  "jubyer bin rashed",
  "chinku",
  "faruk bin ata ul korim",
  "arman",
];
const largestFriendName = bestFriend(friends);
console.log(largestFriendName);
