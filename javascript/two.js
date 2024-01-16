let obj = {
    id:1,
    name:'darnisha',
    age:"23",
    role:"full Stack Developer"
}
function convertToArray(obj){
    newArr = [];
    for(key in obj){
        let temp = [];
        temp.push(key,obj[key]);
        newArr.push(temp);
    }
    return newArr;
}

console.log(convertToArray(obj));