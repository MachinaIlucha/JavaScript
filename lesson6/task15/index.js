let a = [1, 1, 5, 4, 7, 6, 5];

console.log(removeDuplicates(a));

function removeDuplicates(arr){
    if(!Array.isArray(arr))
        return null;

    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}