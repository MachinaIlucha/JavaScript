getPrimes(17);

function getPrimes(a){
	for (var i = 0; i <= a; i++) {
		if (isPrime(i)) 
			console.log(i);
	}
}

function isPrime(x){     
      d = x-1;
      while (d > 1){
        if ((x % d) == 0) 
        	return false;
        d--;
      }
      return true;
  }