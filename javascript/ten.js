function counting(num) {
    let _count = 0;
    return function () {
        _count += num;
        return _count;
    }
}

const counter = counting(20);

console.log(counter());