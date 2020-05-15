function squareArray(arr){
    if(!Array.isArray(arr))
        return null;
    let arrTo = [];
    return copyArray(arr, arrTo);
}

function copyArray(arrFrom, arrTo){
    let i = 0;
    arrFrom.forEach(element => {
        arrTo[i] = element * element;
        i++;
    });
}