function sortAsc(array){
    if(!Array.isArray(array))
        return null;

    let sorted = false
  while (!sorted){
    sorted = true;
    arr.forEach(function (element, index, arr){
      if (element > arr[index+1]) {
        arr[index] = arr[index+1];
        arr[index+1] = element;
        sorted = false;
      }
    });
  }
  return array;
}

function sortDesk(array){
    if(!Array.isArray(array))
        return null;

    let sorted = false
  while (!sorted){
    sorted = true;
    arr.forEach(function (element, index, arr){
      if (element < arr[index+1]) {
        arr[index] = arr[index+1];
        arr[index+1] = element;
        sorted = false;
      }
    });
  }
  return array;
}