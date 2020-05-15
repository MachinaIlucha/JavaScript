function sortAsc(arr){
    if(!Array.isArray(arr))
        return null;

    let sorted = false
  while (!sorted){
    sorted = true;
    arr.forEach(function (element, index, array){
      if (element > array[index+1]) {
        array[index] = array[index+1];
        array[index+1] = element;
        sorted = false;
      }
    });
  }
  return arr;
}

function sortDesk(arr){
    if(!Array.isArray(arr))
        return null;

    let sorted = false
  while (!sorted){
    sorted = true;
    arr.forEach(function (element, index, array){
      if (element < array[index+1]) {
        array[index] = array[index+1];
        array[index+1] = element;
        sorted = false;
      }
    });
  }
  return arr;
}