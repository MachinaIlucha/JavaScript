function getPrimes(a)
{
	let arr = [];
	let c = 0;
	hello:
   for (let i = 2; i <= a; i++) {
   	for (let j = 2; j < i; j++) {
   		if (i % j === 0)
			continue hello;		
   	}
	   arr[c] = i;
	   c++;
   }

   for (let index = 0; index < arr.length; index++) {
	   console.log(arr[index]);
   }
}