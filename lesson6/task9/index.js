let arr = [2, 5, 6, 7, 12];

console.log(reverseArray(arr));

function reverseArray(arr){
    if(!Array.isArray(arr))
        return null;

    let arrTo = [];
    return copyArray(arr, arrTo).reverse();
}

function copyArray(arrFrom, arrTo){
    let i = 0;
    arrFrom.forEach(element => {
       arrTo[i] = element;
       i++;
    });
    return arrTo;
}