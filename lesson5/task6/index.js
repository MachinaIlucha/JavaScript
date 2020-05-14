getPrimes(17);

function getPrimes(a)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= a; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= a; j += i) 
            {
                store[j] = true;
            }
        }
    }
    for (var i = 0; i < primes.length; i++) {
    	console.log(primes[i]);
    }
}