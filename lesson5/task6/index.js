getPrimes(17);

function getPrimes(a){
         for (var i = 0; i <= a; i++) {         
          for (var j = 2; j < i; j++) {           
           if(i % j == 0) break;
            console.log(i);
          }                  
         }
 }