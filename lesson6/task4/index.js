function swap(arr){
    let a = arr;
    [a[0], a[a.length - 1]] = [[a.length - 1], a[0]];
    return a;
}