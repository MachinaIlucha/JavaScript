let m = 10;
let n = 20;
let res = 1;

do {
	if ((m % 2) == 1) {
		res *= m;
	}
	m++;
} while(m < n);


console.log('Result: ', res);