let array = [1, 5, 6, 8];

console.log(swap(array));
console.log(array);

function swap(arr){
    let a = [];

    for (let i = 0; i < arr.length; i++) {
        a[i] = arr[i]; 
    }

    [a[a.length - 1]] = [a[0], a[a.length - 1]];
    return a;
}