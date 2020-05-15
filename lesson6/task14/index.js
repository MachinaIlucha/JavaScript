function includes(arr, num){
    arr.forEach(el => {
        if(el === num)
            return true;
    });
    return false
}