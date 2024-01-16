function findPos(arr,name){
    if(arr.indexOf(/name/gi)){
        console.log(`position of ${name} :::  `,arr.indexOf(name));
        let l = arr.indexOf(name);
        for(i = arr.indexOf(name) ; i<arr.length;i++ ){
            console.log(arr[i]);
        } 

    } else{
        console.log("not found")
    }

}
arr = ["khushi","darnisha","lisa",'drashti','shiv','srvsti','ganesh','urvashi','parvati','chetan','darshna','somya','man','manisha','krishna']
findPos(arr,"urvashi");

