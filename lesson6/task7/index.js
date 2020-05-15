function checkSum(arr){
    if (!Array.isArray(arr))
        return null;
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });

    return sum > 100 ? true : false;
}