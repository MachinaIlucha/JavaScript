const sum = arr => { 
    if(!Array.isArray(numbers))
        return null;
    let sum = 0;
    numbers.map(number => sum += number);
    return sum;
}