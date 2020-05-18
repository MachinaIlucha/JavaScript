const sum = arr => { 
    if(!Array.isArray(arr))
        return null; 
    return arr.reduce(function(a, b) { 
        return a + b; 
    });
}