let a = [5,6,1,2,4,7,99];

console.log(getSubArray(a,4));

function getSubArray(arr, count){
    let a = arr.slice();
    a.length = count;
    return  a;
}