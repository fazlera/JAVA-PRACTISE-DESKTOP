var shoppingCart = {
    books     : 3,
    sunglass  : 1,
    keyboard  : 5,
    mouse     : 1,
    pen       : 25,
    shoes     : 2,
    bottle    : 10
}
   var keys = Object.keys(shoppingCart);
   console.log(keys);
   
   var value = Object.values(shoppingCart);
   console.log(value);

// for(var i = 0; i < keys.length ; i++){
//     var propertyName = keys[i];
//     var propertyValue= value[i];
//     console.log(propertyName,propertyValue);
// }

for (const propertyName in shoppingCart) {
     
        const value = shoppingCart[propertyName];
       console.log(propertyName, value); 
    
}