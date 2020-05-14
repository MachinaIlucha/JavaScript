function getSpecialNumbers(m,n){
    let arr = [];
    let c = 0;
    for (let i = m; i <= n; i++) {
        if(i % 3 === 0){
            arr[c] = i;
            c++;
        }
    }
    return arr;
}