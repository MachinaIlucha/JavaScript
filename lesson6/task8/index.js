function increaseEvenEl(arr, delta){
    if (!Array.isArray(arr)) 
        return null;
    arr.forEach(element => {
        if(element % 2 === 0)
            element += delta;
    });
    return arr;
}