function getPrimes(a)
{
   for (let i = 1; i <= a; i++) {
   	for (let j = 2; j < i; j++) {
   		if (i % j === 0)
   			i++;
   	}
   	console.log(i);
   }
}