function getPrimes(a)
{
   for (var i = 1; i <= a; i++) {
   	for (var j = 2; j < i; j++) {
   		if (i % j === 0)
   			i++;
   	}
   	console.log(i);
   }
}