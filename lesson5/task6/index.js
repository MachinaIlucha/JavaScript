getPrimes(17);

function getPrimes(a)
{
   for (var i = 2; i <= a; i++) {
   	for (var j = 1; j < i; j++) {
   		if (i % j === 0)
   			i++;
   	}
   	console.log(i);
   }
}