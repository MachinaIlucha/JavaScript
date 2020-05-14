getPrimes(98);

function getPrimes(a){
	nextPrime:
	for (let i = 2; i <= a; i++) { // Для всех i...
  		for (let j = 2; j < i; j++) { // проверить, делится ли число..
    		if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  		}
  		console.log(i);
	}
}