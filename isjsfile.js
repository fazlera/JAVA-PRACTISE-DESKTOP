function isJavaScript(file){
    if(typeof file !== 'string'){
        return 'please provide me a string value'
    }
    else{
        // split() for the string value for . remove
        // const stringSplit = file.split('.');
        // const lastString = stringSplit.pop();
        // return lastString.toLowerCase() === 'js'

        // return file.toLowerCase().endsWith('.js'); we can use this 
        
        if(file.toLowerCase().endsWith(".js")){
            return true
        }else{
            return false
        }
    }
    
}

const fileName = isJavaScript('hello.html.js.css.gs.js.JS.klmn.js');
console.log(fileName);