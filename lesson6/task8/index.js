function increaseEvenEl(arr, delta){
    if (!Array.isArray(arr)) 
        return null;

    let i = 0;

    arr.forEach(element => {
        if(element % 2 === 0){
            arr[i] = element + delta;  
            i++;
        } else {
            arr[i] = element
            i++;
        }
                              
    });
    return arr;
}