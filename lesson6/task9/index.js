let arr = [2, 5, 6, 7, 12];

console.log(reverseArray(arr));

function reverseArray(arr){
    if(!Array.isArray(arr))
        return null;

    return arr.reverse();
}