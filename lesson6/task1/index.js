function getArrayBounds(arr){
    if(arr.isArray()){
        let c = [];
        c[0] = arr.length;
        c[1] = arr[0];
        c[2] = arr[arr.length - 1];
        return c;
    } else return null;
}