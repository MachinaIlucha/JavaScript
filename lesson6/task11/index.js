function sortAsc(array){
    if(!Array.isArray(array))
        return null;

        for (var i = 0; i < array.length; i++) {//Outer Loop
            for(var j=0; j < array.length - 1; j++){//Inner Loop
             if (array[j] > array[j + 1]) {
               var a = array[j]
               var b = array[j + 1]
               array[j] = b
               array[j + 1] = a
              }
            }
           }
        return array;
}

function sortDesk(array){
    if(!Array.isArray(array))
        return null;

        for (var i = 0; i < array.length; i++) {//Outer Loop
            for(var j=0; j < array.length - 1; j++){//Inner Loop
             if (array[j] < array[j + 1]) {
               var a = array[j]
               var b = array[j + 1]
               array[j] = b
               array[j + 1] = a
              }
            }
           }
        return array;
}