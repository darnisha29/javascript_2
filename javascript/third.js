function swapping(arr) {
    let maxnum = Math.max(...arr);
    let minnum = Math.min(...arr);
    
    // for (i = 0 ; i< arr.length ; i++) {

    // }
    let maxindex = arr.indexOf(maxnum);
    let minindex = arr.indexOf(minnum);

    arr[maxindex] = minnum;
    arr[minindex] = maxnum;

    return arr;

}
console.log(swapping([43,56,23,1,66,106,89,68,2]));