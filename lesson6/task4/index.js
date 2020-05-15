function swap(arr){
    let a = [];

    for (let i = 0; i < arr.length; i++) {
        a[i] = arr[i]; 
    }

    a.push(a[0]);
    return a;
}