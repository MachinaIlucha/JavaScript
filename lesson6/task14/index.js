function includes(arr, num){
    let isIn = false;
    arr.forEach(el => {
        if(el === num)
            isIn = true;
    });
    return isIn;
}