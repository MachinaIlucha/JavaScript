const arr = [1, 2, 3, 56];

const reserveArray = numbers => {
    if(!Array.isArray(numbers))
        return null;
    return numbers.slice().reverse();
}

console.log(reserveArray(arr));