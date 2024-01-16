function findMiddle(word){
   var len = word.length;
   if(len%2 === 0) {
     let str = '';
     let middle = len/2
        str += word[middle - 1];
        str += word[middle];
        console.log(str);
   }else{
    let str = '';
     let middle = Math.floor(len/2)
     str += word[middle]
     console.log(str);
   }

}
findMiddle("happy");
findMiddle("incredible");
findMiddle("hello");