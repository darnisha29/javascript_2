function multiply(x){
    return function(y){
        return x * y;
    }
}

const answer = multiply(3)(6);
console.log(answer);