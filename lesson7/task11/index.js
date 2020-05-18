const arrAverage = arr => {
    if(!Array.isArray(arr)) return null;
    let sum = arr.reduce((previous, current) => current += previous);
    return sum / arr.length;
}

//console.log(arrAverage([2, 56, 3, 41, 0, 4, 100, 23]));