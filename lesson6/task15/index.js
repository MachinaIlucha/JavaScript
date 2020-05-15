let a = [1, 1, 2, 5, 6, 1];

console.log(removeDuplicates(a));

function removeDuplicates(arr){
    if(!Array.isArray(arr))
        return null;

    return Array.from(new Set(arr));
}