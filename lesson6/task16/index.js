let a = [1, 1, 2, 5, 6, 1, 5, 6, ,3 ,2 ,1 ,2141, 5325];

console.log(uniqueCount(a));

function uniqueCount(arr){
    if(!Array.isArray(arr))
        return null;

    return Array.from(new Set(arr)).length;
}