function swap(arr){
    let a = [];

    for (let i = 0; i < arr.length; i++) {
        a[i] = arr[i]; 
    }

    let c = a[0];
    a.push(c);
    return a;
}