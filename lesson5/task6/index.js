getPrimes(17);

function getPrimes(n)
{
   for (var i = 2; i <= n; i++) {
   	for (var j = 2; j < i; j++) {
   		if (i % j === 0)
   			i++;
   	}
   	console.log(i);
   }
}