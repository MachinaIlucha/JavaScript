const squareArray = numbers => { 
    if(!Array.isArray(numbers))
        return null;
    return numbers.map(number => Math.pow(number, 2));
}