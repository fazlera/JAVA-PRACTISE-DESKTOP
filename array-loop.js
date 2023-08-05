var number = [45, 89, 75, 63, 25, 19, 47];
var max = number[0];
for(var i = 0; i < number.length ; i++){
    var element = number[i]
    if(element > max){
        max = element
    }
    
}
console.log(max);