const shopPhone = [
{Name:'samsung', camera:12, storage:'32gb', price:44000, color:'black'},
{Name:'iphone', camera:12, storage:'32gb', price:94000, color:'black'},
{Name:'xaomi', camera:12, storage:'32gb', price:34000, color:'black'},
{Name:'Nokia', camera:12, storage:'32gb', price:64000, color:'black'},
{Name:'Oppo', camera:12, storage:'32gb', price:22000, color:'black'},
{Name:'Vivo', camera:12, storage:'32gb', price:39000, color:'black'},
{Name:'Realme', camera:12, storage:'32gb', price:26000, color:'black'},
]

function myPhone(smartPhones){ 
    let phoneIndex = shopPhone[0];

    for(let i = 0; i < smartPhones.length; i++ ){
        const element = smartPhones[i];
        if(element.price < phoneIndex.price){
            phoneIndex = element;
        }
        
    }
    return phoneIndex;
}

const selectPhone = myPhone(shopPhone);
console.log(selectPhone);