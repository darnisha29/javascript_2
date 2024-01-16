// write a function that convert all the keys in an object from sanke case to camel case

function convertToCamel (obj) {
    // for(keys in obj){
    //     return obj.Keys.replace(/_a-z/g),(match,letter).toUppercase()
    // }
    console.log(Object.keys(obj));
        return Object.keys(obj).replace(/_a-z/g,(match,letter)).toUpperCase();
        
}

var obj = {
    first_name: 'khushi',
    last_name: "patel"
}
console.log(convertToCamel(obj));