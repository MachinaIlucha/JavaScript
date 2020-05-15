function checker(arr){
    if(!Array.isArray)
        return null;
    let max = arr[0];
    let min = arr[0];
    arr.forEach(element => {
        if(element > max)
            max = element
        else if(element < min)
            min = element;
    });
    return (max + min) > 1000 ? true : false;
}