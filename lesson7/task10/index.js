const filterNames = (arr, text) => arr
        .filter(name => name.includes(text) && name.length > 5)
        .slice();