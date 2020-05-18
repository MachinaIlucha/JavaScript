const arrAverage = arr => {
    if(!Array.isArray(arr)) return null;
    let sum = values.reduce((previous, current) => current += previous);
    return sum / values.length;
}