function swap(arr){
    let a = arr;
    [a[a.length - 1], a[0]] = [a[0], a[a.length - 1]];
    return a;
}