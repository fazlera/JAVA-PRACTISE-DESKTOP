function isJavaScript(file){
    if(typeof file !== 'string'){
        return 'please provide me a string value'
    }
    else{
        if(file.endsWith(".js")){
            return true
        }else{
            return false
        }
    }
    
}

const fileName = isJavaScript('hello.html.js.css.gs.js');
console.log(fileName);