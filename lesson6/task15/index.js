let a = [1, 1, 5, 4, 7, 6, 5];

console.log(removeDuplicates(a));

function removeDuplicates(arr){
    if(!Array.isArray(arr))
        return null;

        let unique = {};
        arr.forEach(function(i) {
          if(!unique[i]) {
            unique[i] = true;
          }
        });
        return Object.keys(unique);
}